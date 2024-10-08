import React, { FC, useMemo } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletConnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import './App.css';
import Airdrop from './Airdrop';

function App() {
  return (
    <ConnectionProvider endpoint={'https://api.devnet.solana.com'}>
      {/* <WalletProvider wallets={[]} autoConnect> */}
      <WalletModalProvider>
        <WalletMultiButton />
        <WalletDisconnectButton />
        <div>
          <h1>Hello</h1>
        </div>
        <Airdrop></Airdrop>
      </WalletModalProvider>
      {/* </WalletProvider> */}
    </ConnectionProvider>
  );
}

export default App;
