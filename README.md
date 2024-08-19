# E Voting Using Blockchain ETH by Yuvraj
instagram.com/belbaseyuvraj

Smart Contract Deployment
The smart contract for the project setup is located under Smart-Contracts directory on file
vote-contract.sol, open this file and copy its content and go to https://remix.ethereum.org and
make sure you are connected on the Ethereum Blockchain on your wallet.
1. Create a new file under contracts directory called “vote.sol” and paste the contract
code.
In order to configure the smart contract to work with the dApp, you need to verify the smart
contract on the scan network
This method requires two parameters:

createPollFee: How much users will need to pay to create a new poll (In BNB)
_
voteFee: How much users will need to pay in order to vote (in BNB)
Lets say we want them to pay $1 for voting and poll creation, here are sample inputs:
1. 4700000000000000
2. 4700000000000000
 Set Reward Parameters
This method requires three inputs:
 RewardTokenAddress: Your reward token smart contract address
RewardAmount: Reward per vote in your tokens
DepositeAmount: How much tokens you initially want to deposit on the smart
contract for the rewards.
On the file in /files/src/config.ts you need to replace those addresses with your just deployed
smart contract addresses.
RewardT oken: Is your token address
VotingContract: Is your voting smart contract address.
Once you update those inputs, your dApp will work as expected and you can now launch it
locally.
T o launch your dApp locally, you will need to have NODE JS, you can download it from the
link below:
https://nodejs.org/en/download
Once the NODE JS is installed on your local PC, open the files folder on VS Code.
Open the new terminal, and execute the commands below:
1. npm install
2. npm run dev
3. You will see the live local address, like: localhost:5173, open this on your browser and you
will see the dApp.
