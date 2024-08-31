import { useConnection, useWallet } from '@solana/wallet-adapter-react';

const Airdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirdropTokenToUser() {
    const amount = document.getElementById('publickey').value;
    await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
    alert('Airdrop token sent');
  }
  return (
    <div>
      <input id='publickey' type='number' placeholder='Amount'></input>{' '}
      <button onClick={sendAirdropTokenToUser}>Send Airdrop</button>
    </div>
  );
};

export default Airdrop;
