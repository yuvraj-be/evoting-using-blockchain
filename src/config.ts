import { Address } from "viem";
import { Token } from "./types/Token";
import { sepolia } from "viem/chains";

const config = {
  chains: [sepolia],
  walletConnectProjectId: "865797569d2e3cd605c5b994cc76f18c", // REPLACE WITH YOUR WALLET CONNECT PROJECT ID

  rewardToken: {
    [sepolia.id]: {
      symbol: "USDT",
      address: "0x29a8344ab5e336667ac6e380204bc84208a909f0", // YOUR REWARD TOKEN SMART CONTRACT
      decimals: 6,
    },
  } as Record<number, Token>,

  votingContract: {
    [sepolia.id]: "0x63cce884ffd33d6ca47885eb38b8f34e650937d8", // YOUR VOTING SMART CONTRACT
  } as Record<number, Address>,
};

export default config;
