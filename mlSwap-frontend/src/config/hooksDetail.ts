// ─── Types shared between Pools pages and Campaigns pages ────────────────────

export interface HookConfig {
  address: `0x${string}`;
  name: string;
  description: string;
  rewardType: string;
}

/** Used by /pools and /pools/[id] to badge active hooks on pool rows */
export const HOOKS_DETAILS: HookConfig[] = [
  {
    address: "0x759ebc7a9d4236a207cd5ade79d00a02c37bc040" as `0x${string}`,
    name: "PointsHook",
    description: "Swap & Accumulate Points.\n\nEvery swap you make in this pool earns you Points equivalent to some portion of your swap volume! Points are unique to this specific pool and are minted directly to your wallet as collectible ERC1155 tokens. Use them to track your rank and unlock future reward campaigns.",
    rewardType: "ERC-1155 Tokens",
  },
];

// ─── Campaigns ───────────────────────────────────────────────────────────────

export interface PoolKey {
  currency0: `0x${string}`;
  currency1: `0x${string}`;
  fee: number;
  tickSpacing: number;
  hooks: `0x${string}`;
}

/**
 * A campaign is a hook with one or more pools attached.
 * Each pool in poolKeys gets its own leaderboard section on the detail page.
 */
export interface HookCampaign extends HookConfig {
  active: boolean;
  poolKeys: PoolKey[];
}

/**
 * Add new campaigns here. Each element is one campaign card on /campaigns.
 * Its index in this array is used as the URL id: /campaigns/0, /campaigns/1, etc.
 */
export const campaigns: HookCampaign[] = [
  {
    active: true,
    address: "0x759ebc7a9d4236a207cd5ade79d00a02c37bc040" as `0x${string}`,
    name: "PointsHook",
    description: "Swap & Accumulate Points.\n\nEvery swap you make in this pool earns you Points equivalent to some portion of your swap volume! Points are unique to this specific pool and are minted directly to your wallet as collectible ERC1155 tokens. Use them to track your rank and unlock future reward campaigns.",
    rewardType: "ERC-1155 Tokens",
    poolKeys: [
      // USDC / MONKE
      {
        currency0: "0x3600000000000000000000000000000000000000" as `0x${string}`,
        currency1: "0x383f1aef5282754Fc48578E1dA834dC01223F75F" as `0x${string}`,
        fee: 3000,
        tickSpacing: 60,
        hooks: "0x759ebc7a9d4236a207cd5ade79d00a02c37bc040" as `0x${string}`,
      },
      // USDC / RCH
      {
        currency0: "0x3600000000000000000000000000000000000000" as `0x${string}`,
        currency1: "0xD2E89ec3ee53E017b9fE5755baD2D00622250a31" as `0x${string}`,
        fee: 3000,
        tickSpacing: 60,
        hooks: "0x759ebc7a9d4236a207cd5ade79d00a02c37bc040" as `0x${string}`,
      },
      // USDC / SOFT
      {
        currency0: "0x3600000000000000000000000000000000000000" as `0x${string}`,
        currency1: "0x645C1b3E13EC2f36a414410679D0c71AAA8b48a4" as `0x${string}`,
        fee: 3000,
        tickSpacing: 60,
        hooks: "0x759ebc7a9d4236a207cd5ade79d00a02c37bc040" as `0x${string}`,
      },
    ],
  },
];
