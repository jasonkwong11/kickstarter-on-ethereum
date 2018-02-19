const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// delete the entire 'build' folder
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

// read 'Campaign.sol' from the 'contracts' folder
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

// compile both contracts with the solidity compiler
const output = solc.compile(source, 1).contracts;

// recreate the build folder if it doesn't exist
fs.ensureDirSync(buildPath);

// write output to the 'build' directory
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}


