import React, { useEffect, useState } from 'react';
import { styles } from '../../../app/styles/myOrdersStyles';
import NFTCard from '../../../entities/NFTCard';

const Body = ({ contract, connectedWallet }) => {
    const [nftCollection, setNFTCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const arr = await contract.getNFTByAddress(
                    connectedWallet.address
                );
                console.log(arr);
                setNFTCollection(arr);
            } catch (error) {
                console.error('Error fetching NFT collection:', error);
            }
        };

        fetchData();
    }, [contract, connectedWallet]);

    const extractedData = nftCollection.map((proxy) => {
        const { title, price, img, id } = proxy; // Access the properties of each proxy
        return { title, price, img, id }; // Create an object with the extracted data
    });

    console.log(extractedData);

    return (
        <div className={styles.body}>
            <h1 className={styles.h1}>
                NFT Collection of user {connectedWallet.address}
            </h1>
            <div className="flex flex-wrap justify-center mt-12 z-30 mx-auto min-h-screen">
                {extractedData.map((item, index) => {
                    return (
                        <NFTCard
                            key={index}
                            title={item.title}
                            img={item.img}
                            price={item.price}
                            id={item.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
