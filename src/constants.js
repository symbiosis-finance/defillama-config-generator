import { ChainId } from 'symbiosis-js-sdk';

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export const CHAINS_DEFILAMA = {
  [ChainId.ETH_MAINNET]: 'ethereum',
  [ChainId.BSC_MAINNET]: 'bsc',
  [ChainId.AVAX_MAINNET]: 'avax',
  [ChainId.MATIC_MAINNET]: 'polygon',
  [ChainId.TELOS_MAINNET]: 'telos',
  [ChainId.AURORA_MAINNET]: 'aurora',
  [ChainId.BOBA_MAINNET]: 'boba',
  [ChainId.BOBA_AVALANCHE]: 'boba_avax',
  [ChainId.SYMBIOSIS_MAINNET]: 'symbiosis',
  [ChainId.KAVA_MAINNET]: 'kava',
  [ChainId.ZKSYNC_MAINNET]: 'era',
  [ChainId.ARBITRUM_MAINNET]: 'arbitrum',
  [ChainId.OPTIMISM_MAINNET]: 'optimism',
  [ChainId.ARBITRUM_NOVA]: 'arbitrum_nova',
  [ChainId.POLYGON_ZK]: 'polygon_zkevm',
  [ChainId.MANTLE_MAINNET]: 'mantle',
  [ChainId.LINEA_MAINNET]: 'linea',
  [ChainId.BASE_MAINNET]: 'base',
  [ChainId.TRON_MAINNET]: 'tron',
  [ChainId.SCROLL_MAINNET]: 'scroll',
  [ChainId.MANTA_MAINNET]: 'manta',
  [ChainId.METIS_MAINNET]: 'metis',
  [ChainId.MODE_MAINNET]: 'mode',
  [ChainId.RSK_MAINNET]: 'rsk',
  [ChainId.BLAST_MAINNET]: 'blast',
  [ChainId.MERLIN_MAINNET]: 'merlin',
  [ChainId.ZKLINK_MAINNET]: 'zklink',
  [ChainId.CORE_MAINNET]: 'core',
  [ChainId.TAIKO_MAINNET]: 'taiko',
  [ChainId.SEI_EVM_MAINNET]: 'sei',
  [ChainId.ZETACHAIN_MAINNET]: 'zeta',
  [ChainId.CRONOS_MAINNET]: 'cronos',
  [ChainId.FRAXTAL_MAINNET]: 'fraxtal',
  [ChainId.GRAVITY_MAINNET]: 'gravity',
  [ChainId.BAHAMUT_MAINNET]: 'ftn',
  [ChainId.BSQUARED_MAINNET]: 'bsquared',
  [ChainId.CRONOS_ZK_MAINNET]: 'cronos_zkevm',
  [ChainId.MORPH_MAINNET]: 'morph',
  [ChainId.TON_MAINNET]: 'ton',
  [ChainId.GOAT_MAINNET]: 'goat',
  [ChainId.SONIC_MAINNET]: 'sonic',
  [ChainId.ABSTRACT_MAINNET]: 'abstract',
  [ChainId.GNOSIS_MAINNET]: 'xdai',
  [ChainId.BERACHAIN_MAINNET]: 'berachain',
  [ChainId.UNICHAIN_MAINNET]: 'unichain',
  [ChainId.SONEIUM_MAINNET]: 'soneium',
  [ChainId.OPBNB_MAINNET]: 'op_bnb',
  [ChainId.HYPERLIQUID_MAINNET]: 'hyperliquid',
  [ChainId.KATANA_MAINNET]: 'katana',
};

export const SYMBIOSIS_MAINNET = {
  chainName: 'symbiosis',
  tokens: [
    {
      symbol: 'WSIS',
      address: '0xd8db4fb1fEf63045A443202d506Bcf30ef404160',
    },
  ],
  portal: [
    '0x3E6A3EbbC9D88ACC192221797ad90BF72d391778', // pool v2
  ],
};
