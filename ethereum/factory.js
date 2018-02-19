import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xd3A456EE679026e78861a9557619f68A7Aedaa05'
);

export default instance;