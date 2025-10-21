
    WITH symbiosis AS (SELECT block_time,
                              "to",
                              success,
                              hash,
                              data,
                              chain,
                              CASE
                                  WHEN strpos(cast(data as varchar), '73796d62696f7369732d61707000000000000000000000000000000000000000') > 0 THEN 'symbiosis-app' WHEN strpos(cast(data as varchar), '73796d62696f7369732d6170702d747700000000000000000000000000000000') > 0 THEN 'symbiosis-app-tw' WHEN strpos(cast(data as varchar), '73796d62696f7369732d61706900000000000000000000000000000000000000') > 0 THEN 'symbiosis-api' WHEN strpos(cast(data as varchar), '6c69666900000000000000000000000000000000000000000000000000000000') > 0 THEN 'lifi' WHEN strpos(cast(data as varchar), '736f636b65742d696f0000000000000000000000000000000000000000000000') > 0 THEN 'socket-io' WHEN strpos(cast(data as varchar), '646f646f00000000000000000000000000000000000000000000000000000000') > 0 THEN 'dodo' WHEN strpos(cast(data as varchar), '6b79626572737761700000000000000000000000000000000000000000000000') > 0 THEN 'kyberswap' WHEN strpos(cast(data as varchar), '31696e6368000000000000000000000000000000000000000000000000000000') > 0 THEN '1inch' WHEN strpos(cast(data as varchar), '694d650000000000000000000000000000000000000000000000000000000000') > 0 THEN 'iMe' WHEN strpos(cast(data as varchar), '7275626963000000000000000000000000000000000000000000000000000000') > 0 THEN 'rubic' WHEN strpos(cast(data as varchar), '72616e676f000000000000000000000000000000000000000000000000000000') > 0 THEN 'rango' WHEN strpos(cast(data as varchar), '636861696e73706f742e726f7574657200000000000000000000000000000000') > 0 THEN 'chainspot.router' WHEN strpos(cast(data as varchar), '7377696e672d6170690000000000000000000000000000000000000000000000') > 0 THEN 'swing-api'
                                  ELSE 'else'
                                  END as partner
                       FROM (select block_time, "to", success, hash, data, 'ethereum' as chain
          from ethereum.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xf621Fb08BBE51aF70e7E0F4EA63496894166Ff7F UNION ALL select block_time, "to", success, hash, data, 'bnb' as chain
          from bnb.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0x44487a445a7595446309464A82244B4bD4e325D5 UNION ALL select block_time, "to", success, hash, data, 'avalanche_c' as chain
          from avalanche_c.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0x6F0f6393e45fE0E7215906B6f9cfeFf53EA139cf UNION ALL select block_time, "to", success, hash, data, 'polygon' as chain
          from polygon.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xa260E3732593E4EcF9DdC144fD6C4c5fe7077978 UNION ALL select block_time, "to", success, hash, data, 'boba' as chain
          from boba.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xca506793A420E901BbCa8066be5661E3C52c84c2 UNION ALL select block_time, "to", success, hash, data, 'zksync' as chain
          from zksync.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0x38307CB291Af47Af9847c134a34E9477c939Ca28 UNION ALL select block_time, "to", success, hash, data, 'arbitrum' as chain
          from arbitrum.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xf7e96217347667064DEE8f20DB747B1C7df45DDe UNION ALL select block_time, "to", success, hash, data, 'optimism' as chain
          from optimism.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0x0f91052dc5B4baE53d0FeA5DAe561A117268f5d2 UNION ALL select block_time, "to", success, hash, data, 'nova' as chain
          from nova.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xca506793A420E901BbCa8066be5661E3C52c84c2 UNION ALL select block_time, "to", success, hash, data, 'zkevm' as chain
          from zkevm.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xb91d3060C90aac7c4c706aef2B37997b3b2a1DcF UNION ALL select block_time, "to", success, hash, data, 'linea' as chain
          from linea.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0x9A31bAC4b3B958C835C243800B474818D04393dd UNION ALL select block_time, "to", success, hash, data, 'mantle' as chain
          from mantle.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xca506793A420E901BbCa8066be5661E3C52c84c2 UNION ALL select block_time, "to", success, hash, data, 'base' as chain
          from base.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0x691df9C4561d95a4a726313089c8536dd682b946 UNION ALL select block_time, "to", success, hash, data, 'tron' as chain
          from tron.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0x0863786bbf4561f4a2a8be5a9ddf152afd8ae25c UNION ALL select block_time, "to", success, hash, data, 'scroll' as chain
          from scroll.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0x624FFe62eBa13e6057878bCA1D7A9E35651E1D9c UNION ALL select block_time, "to", success, hash, data, 'blast' as chain
          from blast.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0x7057aB3fB2BeE9c18e0cDe4240DE4ff7f159E365 UNION ALL select block_time, "to", success, hash, data, 'taiko' as chain
          from taiko.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0x7057aB3fB2BeE9c18e0cDe4240DE4ff7f159E365 UNION ALL select block_time, "to", success, hash, data, 'sei' as chain
          from sei.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xcE8f24A58D85eD5c5A6824f7be1F8d4711A0eb4C UNION ALL select block_time, "to", success, hash, data, 'abstract' as chain
          from abstract.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0x2E818E50b913457015E1277B43E469b63AC5D3d7 UNION ALL select block_time, "to", success, hash, data, 'gnosis' as chain
          from gnosis.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xcE8f24A58D85eD5c5A6824f7be1F8d4711A0eb4C UNION ALL select block_time, "to", success, hash, data, 'berachain' as chain
          from berachain.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xcE8f24A58D85eD5c5A6824f7be1F8d4711A0eb4C UNION ALL select block_time, "to", success, hash, data, 'unichain' as chain
          from unichain.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xcE8f24A58D85eD5c5A6824f7be1F8d4711A0eb4C UNION ALL select block_time, "to", success, hash, data, 'opbnb' as chain
          from opbnb.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xcE8f24A58D85eD5c5A6824f7be1F8d4711A0eb4C UNION ALL select block_time, "to", success, hash, data, 'hyperevm' as chain
          from hyperevm.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xcE8f24A58D85eD5c5A6824f7be1F8d4711A0eb4C UNION ALL select block_time, "to", success, hash, data, 'katana' as chain
          from katana.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xcE8f24A58D85eD5c5A6824f7be1F8d4711A0eb4C UNION ALL select block_time, "to", success, hash, data, 'apechain' as chain
          from apechain.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xcE8f24A58D85eD5c5A6824f7be1F8d4711A0eb4C UNION ALL select block_time, "to", success, hash, data, 'plasma' as chain
          from plasma.transactions
          where block_date >= current_date - interval '7' day
            AND "to" = 0xcE8f24A58D85eD5c5A6824f7be1F8d4711A0eb4C))
    SELECT block_time, chain, hash, partner, success
    FROM symbiosis
    WHERE success != true
    ORDER BY block_time desc