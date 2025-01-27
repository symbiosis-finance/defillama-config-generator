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
  [ChainId.BOBA_BNB]: 'boba_bnb',
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
};

export const BOBA_BNB = {
  chainName: 'boba_bnb',
  tokens: [
    {
      symbol: 'USDC',
      address: '0x9f98f9f312d23d078061962837042b8918e6aff2',
    },
  ],
  portal: [
    '0x6148FD6C649866596C3d8a971fC313E5eCE84882', // pool v2
  ],
};
