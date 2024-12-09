import { Symbiosis } from "symbiosis-js-sdk";
import fs from "fs";

import { CHAINS_DEFILAMA, ZERO_ADDRESS } from "./constants.js";

const symbiosis = new Symbiosis("mainnet", "defi-lama");

const tokens = symbiosis.tokens();

const tokensConfig = symbiosis.config.chains
  .filter((chain) => chain.portal !== ZERO_ADDRESS)
  .map((chain) => ({
    chainId: chain.id,
    portal: chain.portal,
    chainName: CHAINS_DEFILAMA[chain.id],
    tokens: tokens.filter((token) => token.chainId === chain.id),
  }));

console.log(
  "---Tokens Config--- \n",
  tokensConfig.map((chain) => ({
    name: chain.chainName,
    chainId: chain.chainId,
  }))
);

// Format the config into a string with comments
const formatConfig = (config) => {
  return `module.exports = {
    chains: [
      ${config
        .map(
          (config) => `{
        name: '${config.chainName}',
        tokens: [
            ${config.tokens
              .map((token) => `'${token.address}', // ${token.name}`)
              .join(",\n            ")}
        ],
        holders: [
            '${config.portal}' // portal v2 address
        ]
      }`
        )
        .join(",\n    ")}
    ]
  }`;
};

fs.writeFileSync("config.js", formatConfig(tokensConfig), "utf8");

console.log("---Done---");
