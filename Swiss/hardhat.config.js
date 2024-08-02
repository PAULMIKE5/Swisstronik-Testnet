require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x13dc319b4dccf09c0c53942d7f087df95a92ae4a144fc33076594389c260ab83"], //Your private key starting with "0x"
    },
  },
};
