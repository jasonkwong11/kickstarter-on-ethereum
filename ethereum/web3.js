import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  /// we are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server OR the user is not running metamask
  // use infura, which is an API interface to the ethereum network
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/dYJJIlabTXeQL8M22F3y'
  );

  web3 = new Web3(provider);
}

export default web3;
