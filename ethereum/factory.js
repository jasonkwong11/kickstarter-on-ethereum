import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x1e90bA4eF763bFc2580B78171b2eb94325c61044'
);

export default instance;