import React from 'react';
import { parseUnits } from 'ethers';

import { styles } from '../app/styles/shopStyles';
import { useActions } from '../shared/hooks/useActions';

const CartItem = ({
    title,
    img,
    color,
    price,
    id,
    connectedWallet,
    connectWallet,
    contract,
}) => {
    const { removeFromCart } = useActions();

    const parsedPrice = parseUnits(String(price));

    const overrides = {
        value: parsedPrice,
    };

    return (
        <div className={styles.cartItem}>
            <img alt="test" className="w-64 h-auto mr-48" src={img} />
            <div className="h-fit my-auto mr-48 ">
                <p className={styles.filter + 'cursor-default'}>{title}</p>
                <p className={styles.filter + 'cursor-default'}>{color}</p>
                <p
                    onClick={() => removeFromCart({ id })}
                    className="cursor-pointer underline text-red-700 text-xs mt-3"
                >
                    remove
                </p>
            </div>
            <p
                onClick={async () => {
                    const arr = await contract.getNFTByAddress(connectedWallet);
                    console.log(arr);
                }}
                className="mx-auto mr-48 text-xs"
            >
                {price} ETH
            </p>
            <button
                onClick={async () => {
                    if (connectedWallet !== null) {
                        const tx = await contract.createNFT(
                            title,
                            img,
                            parsedPrice,
                            id,
                            overrides
                        );
                        await tx.wait();
                        removeFromCart({ id });
                    } else {
                        connectWallet();
                    }
                }}
                className={styles.addbutton + ''}
            >
                {connectedWallet !== null ? 'checkout' : 'connect wallet'}
            </button>
        </div>
    );
};

export default CartItem;
