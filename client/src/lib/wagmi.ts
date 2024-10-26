import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
    Chain,
} from 'wagmi/chains';
import { createConfig } from '@privy-io/wagmi';
import { http } from 'viem';

export const baseSepolia = {
    id: 84532,
    name: 'Base Sepolia',
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://sepolia.base.org'] },
    },
    blockExplorers: {
        default: { name: 'arbiscan', url: 'https://sepolia.basescan.org' },
    },
    testnet: true,
} as const satisfies Chain;

export const config = createConfig({
    chains: [baseSepolia],
    transports: {
        [baseSepolia.id]: http(),
    },
});