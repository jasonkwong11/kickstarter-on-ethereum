const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  //create a CampaignFactory instance and use that instance to deploy the bytecode and send it gas
  // from a ganache account
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  // now that the factory has gas, create a new campaign instance with it,
  // passing in a min contribution amount
  await factory.methods.createCampaign('100').send({
    from: accounts[0],
    gas: '1000000'
  });
  //get the campaignAddress of the campaign instance that was just created
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  //now we need to instruct web3 to create a JS representation of the contract and
  // that representation needs to be operating against/trying to access the contract
  // that exists at the campaignAddress:
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );

  //^^^notice that the above Contract call on line 36 is different from that on
  // line 16.
  // we use the line 16 version, where we don't specify an address when we want
  // to deploy a new instance of the Contract
  // we use the line 36 version, when we already have a deployed contract and want
  // to inform web3 of its existence.
});

describe('Campaigns', () => {
  it('deploys a factory and a campaign', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it('marks caller as the campaign manager', async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('allows people to contribute money and marks them as approvers', async () => {
    await campaign.methods.contribute().send({
      value: '200',
      from: accounts[1]
    });

    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });

  it('requires a minimum contribution', async() => {
    try {
      await campaign.methods.contribute().send({
        value: '5',
        from: accounts[1]
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('allows a manager to make a payment request', async () => {
    await campaign.methods
      .createRequest('Buy batteries', '100', accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
      //^^ everytime we make a transaction to our function, we get no return value back
      // so we have to reach back into our contract and retrieve the request
      // that was just made
    const request = await campaign.methods.requests(0).call();
    //^^ zero above is the index of the request
    assert.equal('Buy batteries', request.description);
  });

  //End to end test: take a campaign, contribute to it, create a request
  // aprove the request, then finalize the request.
  // then assert that some other party received the money

  it('processes requests', async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });

    await campaign.methods
      .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({ from: accounts[0], gas: '1000000' });

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });
    // limitation of the ganache network: no clean up of accounts after
    // each test run ... so accounts[1] might have ?? amount of ether

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);
    console.log('heres the balance of accounts[1]', balance);
    // not exactly 105 because we used it to issue a transaction.
    // the missing amount is the cost of gas that was paid for the transaction
    // this gas that was paid doesn't get cleaned up between tests
    assert(balance > 104);
  });
});
