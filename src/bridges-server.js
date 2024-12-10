import { isBtcChainId, isEvmChainId, isTonChainId, isTronChainId, Symbiosis } from 'symbiosis-js-sdk';
import fs from 'fs';

const symbiosis = new Symbiosis('mainnet', 'defillama');

const config = symbiosis.config.chains.map((chainConfig) => {
  const { synthesis, portal, id } = chainConfig;
  if (isTonChainId(id) || isBtcChainId(id)) {
    return;
  }
  return {
    chainId: chainConfig.id,
    portal,
    synthesis
  };
}).filter(Boolean);

fs.writeFileSync(
  'bridges-server.json',
  JSON.stringify(config),
  'utf8'
);

