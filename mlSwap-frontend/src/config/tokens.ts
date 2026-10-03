export interface TokenConfig {
  address: `0x${string}`;
  name: string;
  symbol: string;
  decimals: number;
  logo: string;
}


export const TOKENS: TokenConfig[] = [
  {
    "address": "0x3600000000000000000000000000000000000000" as `0x${string}`,
    "name": "USDC",
    "symbol": "USDC",
    "decimals": 6,
    "logo": "/assets/0x3600000000000000000000000000000000000000/logo.png"
  },

  {
    "address": "0x645C1b3E13EC2f36a414410679D0c71AAA8b48a4",
    "name": "SoftDAO",
    "symbol": "SOFT",
    "decimals": 18,
    "logo": "/assets/0x8c277c071D42987Ef7712d135C4da1f46EA8Af8d/logo.png"
  },
  {
    "address": "0xD2E89ec3ee53E017b9fE5755baD2D00622250a31",
    "name": "Reach",
    "symbol": "RCH",
    "decimals": 18,
    "logo": "/assets/0x10a2A353598E85Ea959B9176a6432a63C086A1Be/logo.jpeg"
  },
  {
    "address": "0x383f1aef5282754Fc48578E1dA834dC01223F75F",
    "name": "MONKE",
    "symbol": "MONKE",
    "decimals": 18,
    "logo": "/assets/0x57700E377d85328322574FB8d92d4F017a2106E2/logo.jpeg"
  }
  
];
