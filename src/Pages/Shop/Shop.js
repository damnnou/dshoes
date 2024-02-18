import React from 'react';
import { LeftMenu, Header, Body } from '../../widgets';
import { styles } from '../../app/styles/shopStyles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Shop = ({ filter, setFilter }) => {
    const cartItems = useSelector((state) => state.cart);

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
            <LeftMenu setFilter={setFilter} />
            <Header setFilter={setFilter} />
            <Body filter={filter} />
        </div>
    );
};

export default Shop;
