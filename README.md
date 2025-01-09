## MANGO TESTNET BOT

**Register** : [HERE](https://task.testnet.mangonetwork.io/?invite=NBJutF)

- [Download Mango Wallet Extension](https://chromewebstore.google.com/detail/mango-wallet/jiiigigdinhhgjflhljdkcelcjfmplnd)
- Backup Phrase
- Claim Faucet on your Wallet extension
- Go To [Web](https://task.testnet.mangonetwork.io/?invite=tVB90U) 
- Complete Bind Social Media Accounts and JOIN NOW
- Go to [Event Page](https://task.testnet.mangonetwork.io/events)
- Complete Task on the Task List ( Swap , Bridge )
- Login Daily
- Done

**LFG**

## PREREQUISITE

- Git
- Node JS (v22)
- Funded Mango Wallet With ETH SEPOLIA and TESTNET BNB

 ## BOT FEATURE

- Multi Account 
- Support PK
- Proxy Support
- Daily Claim Faucet
- Daily Mango Swap 
- Daily BeingDex Beta DAPP
- Daily Check In
- Daily Bridge (**Soon**)

## SETUP & CONFIGURE BOT

### LINUX

1. Clone project repository
   ```
   git clone https://github.com/Rambeboy/mango-testnet-bot.git && cd mango-testnet-bot
   ```
2. Install Dependencies and Setup Accounts
   ```
   npm install && npm run setup
   ```
3. Configure your accounts
   ```
   nano accounts/accounts.js
   ```
4. Configure the bot config
   ```
   nano config/config.js
   ```
6. Configure the proxy
    ```
   nano config/proxy_list.js
    ```
7. To run Auto TX
   ```
   npm run start
   ```
   
### WINDOWS

1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repository
   ```
   git clone https://github.com/Rambeboy/mango-testnet-bot.git
   ```
   and cd to project dir
   ```
   cd mango-testnet-bot
   ```
3. Install Dependencies and Setup Accounts 
   ```
   npm install && npm run setup
   ```
5. Navigate to `mango-testnet-bot` directory. 
6. Navigate to `accounts` directory.
7. Now open `acccounts.js` and setup your accounts. 
8. Now Back to `mango-testnet-bot` directory and Navigate to `config` directory and adjust the `config.js` and `proxy_list.js` as needed.
9.  Back to `mango-testnet-bot` directory.
10. To start the app open your `Command Prompt` or `Power Shell`
11. To run auto Tx Bot
    ```
    npm run start
    ```

## UPDATE BOT

To update bot follow this step :
1. Run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   If error run
   ```
   git stash && git pull
   ```
2. Run
   ```
   npm update
   ```
3. Start the bot
4. If any eror happen check `log/app.log`


## IMPORTANT NOTE (READ IT THIS IS NOT DECORATION)

How to get BRIDGE RAW DATA ? 

- Do manual Bridge from ETH (USDT) to MANGO(USDT) WITH SMALL AMOUNT , EX : 0.0001 USDT
- Approve Token Spend
- Approve Bridge Tx
- Go to explorer and search for your tx hash showed on your wallet history

- [**ETH SEPOLIA EXPLORER**](https://sepolia.etherscan.io/)
- [**BSC TESTNET EXPLORER**](https://testnet.bscscan.com/)

And copy the Input Data as HEX. Or you can just copy paste from wallet confirmation approval on input / data section.

Dwyor & Always use a new wallet when running the bot, I am not responsible for any loss of assets.

## LICENSE

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
