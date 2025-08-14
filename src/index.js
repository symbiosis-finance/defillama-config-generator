import { isTonChainId, isTronChainId, Symbiosis } from 'symbiosis-js-sdk';
import fs from 'fs';
import TronWeb from 'tronweb';

import { SYMBIOSIS_MAINNET, CHAINS_DEFILAMA, ZERO_ADDRESS } from './constants.js';

const symbiosis = new Symbiosis('mainnet', 'defillama');

const tokens = symbiosis.tokens();

const tokensConfig = symbiosis.config.chains
  .filter((chain) => chain.portal !== ZERO_ADDRESS || !!chain.tonPortal)
  .map((chain) => {
    const isTronChain = isTronChainId(chain.id);
    const isTonChain = isTonChainId(chain.id);

    let chainTokens = tokens.filter((token) => token.chainId === chain.id);

    if (isTronChain) {
      chainTokens = chainTokens.map((token) => ({
        ...token,
        address: TronWeb.address.fromHex(token.address)
      }));
    } else if (isTonChain) {
      chainTokens = chainTokens.map((token) => ({
        ...token,
        address: token.tonAddress
      }));
    }

    let portalAddress = chain.portal;

    if (isTonChain) {
      portalAddress = chain.tonPortal;
    } else if (isTronChain) {
      portalAddress = TronWeb.address.fromHex(chain.portal);
    }

    return {
      chainId: chain.id,
      portal: portalAddress,
      chainName: CHAINS_DEFILAMA[chain.id],
      tokens: chainTokens
    };
  });

console.log(
  '---Tokens Config--- \n',
  tokensConfig.map((chain) => ({
    name: chain.chainName,
    chainId: chain.chainId
  })),
  '\n\n---SYMBIOSIS_MAINNET--- \n',
  SYMBIOSIS_MAINNET
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
            ${[...new Set(config.tokens.map((token) => token.address))]
        .map((tokenAddress) => {
          const token = config.tokens.find(
            (token) => token.address === tokenAddress
          );

          return `'${tokenAddress}', // ${token.symbol}`;
        })
        .join(',\n            ')}
          ],
          holders: [
              '${config.portal}' // portal
          ]
      }`
    )
    .join(',\n      ')}
    ]
  }`;
};

fs.writeFileSync(
  'config.js',
  formatConfig([...tokensConfig, SYMBIOSIS_MAINNET]),
  'utf8'
);

console.log('---Done---');
