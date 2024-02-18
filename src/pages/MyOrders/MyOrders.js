import React from 'react';
import { Header } from '../../widgets';
import Body from './ui/Body';
import { styles } from '../../app/styles/myOrdersStyles';
import { ethers } from 'ethers';

const MyOrders = ({ contract, setConnectedWallet, connectedWallet }) => {
    let provider;
    let signer;

    const connectWallet = async () => {
        if (window.ethereum == null) {
            console.log('MetaMask not installed; using read-only defaults');
            provider = ethers.getDefaultProvider();
            setConnectedWallet(provider);
        } else {
            provider = new ethers.BrowserProvider(window.ethereum);
            signer = await provider.getSigner();
            setConnectedWallet(signer);
        }
    };

    return (
        <div>
            <Header />
            {connectedWallet !== null ? (
                <Body contract={contract} connectedWallet={connectedWallet} />
            ) : (
                <div className="w-screen h-screen flex justify-center">
                    <button
                        onClick={() => connectWallet()}
                        className={styles.walletbutton}
                    >
                        Connect to wallet
                    </button>
                </div>
            )}
        </div>
    );
};

export default MyOrders;
