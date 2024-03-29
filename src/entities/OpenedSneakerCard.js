import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { LeftMenu, Header } from '../widgets';
import { styles } from '../app/styles/shopStyles';
import { useSelector } from 'react-redux';
import { useActions } from '../shared/hooks/useActions';

const OpenedSneakerCard = () => {
    const { addItem } = useActions();
    const cartItems = useSelector((state) => state.cart);

    const location = useLocation();
    const { title, price, img, id, color, date } = location.state;
    const dateString = date.toString();
    const formattedDate = `${dateString.slice(0, 4)}/${dateString.slice(
        4,
        6
    )}/${dateString.slice(6, 8)}`;
    return (
        <div className="relative">
            <Link
                to="/cart"
                className={
                    cartItems.length > 0
                        ? `${styles.filter} hover:underline w-fit flex ml-auto sticky top-2`
                        : 'invisible'
                }
            >
                CART ({cartItems.length})
            </Link>
            <LeftMenu />
            <Header />
            <div className={styles.openedcard}>
                <img className="w-[450px] h-auto mr-48" src={img} alt={title} />
                <div className="w-[350px] flex flex-col mt-[70px]">
                    <h1 className="font-bold">{title}</h1>
                    <p className="mr-auto text-xs mb-12">id: {id}</p>
                    <p className="text-xs">{color} colored</p>
                    <p className="text-xs">exclusively made for {title}</p>
                    <p className="text-xs">taped seams throughout</p>
                    <p className="text-xs">made in china</p>
                    <p className="text-xs">released at {formattedDate}</p>
                    <h1 className="font-bold mt-8 mb-4">{price} ETH</h1>
                    {cartItems.filter((item) => item.id === id).length > 0 ? (
                        <button className={styles.addedbutton}>Added</button>
                    ) : (
                        <button
                            onClick={() =>
                                addItem({ id, title, img, color, price })
                            }
                            className={styles.addbutton}
                        >
                            Add to cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OpenedSneakerCard;
