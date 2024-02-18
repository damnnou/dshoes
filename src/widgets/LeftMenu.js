import React from 'react';
import { styles } from '../app/styles/shopStyles';
import { Link } from 'react-router-dom';
import { setFilter } from '../store/filter/filter.slice';
import { useDispatch } from 'react-redux';

export const LeftMenu = () => {
    const dispatch = useDispatch();

    const changeFilter = (filterBy) => {
        dispatch(setFilter(filterBy));
    };

    return (
        <div className="flex justify-left items-center pl-12 w-[10%] h-0 bg-white z-20 sticky top-[50%]">
            <ul>
                <Link to="/shop" onClick={() => changeFilter('hi')}>
                    <li className={styles.filter}>All</li>
                </Link>
                <Link to="/shop" onClick={() => changeFilter('jordan')}>
                    <li className={styles.filter}>Jordan</li>
                </Link>
                <Link to="/shop">
                    <li
                        onClick={() => changeFilter('dunk')}
                        className={styles.filter}
                    >
                        Dunk
                    </li>
                </Link>
                <Link to="/shop">
                    <li
                        onClick={() => changeFilter('zoom')}
                        className={styles.filter}
                    >
                        Zoom
                    </li>
                </Link>
                <Link to="/shop">
                    <li
                        onClick={() => changeFilter('yeezy')}
                        className={styles.filter}
                    >
                        Yeezy
                    </li>
                </Link>
                <Link to="/shop">
                    <li
                        onClick={() => changeFilter('travis scott')}
                        className={styles.filter}
                    >
                        Travis Scott
                    </li>
                </Link>
                <Link to="/shop">
                    <li
                        onClick={() => changeFilter('gallery dept')}
                        className={styles.filter}
                    >
                        Gallery Dept
                    </li>
                </Link>
                <Link to="/shop">
                    <li
                        onClick={() => changeFilter('fragment design')}
                        className={styles.filter}
                    >
                        Fragment Design
                    </li>
                </Link>
                <Link to="/">
                    <li className="text-neutral-500 mt-8 mb-2 text-xs cursor-pointer">
                        Home
                    </li>
                </Link>
                <Link to="/information">
                    <li className="text-neutral-500 mb-2 text-xs cursor-pointer">
                        Information
                    </li>
                </Link>
                <Link to="/my-orders">
                    <li className="text-neutral-500 mb-2 text-xs cursor-pointer">
                        My orders
                    </li>
                </Link>
            </ul>
        </div>
    );
};
