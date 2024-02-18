import React from 'react';
import { Link } from 'react-router-dom';
import { MdSnowshoeing as Icon } from 'react-icons/md';
import { styles } from '../app/styles/shopStyles';
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/filter/filter.slice';

export const Header = () => {
    const dispatch = useDispatch();

    const changeFilter = (filterBy) => {
        dispatch(setFilter(filterBy));
    };

    return (
        <div className={styles.header}>
            <Link
                to="/shop"
                onClick={() => changeFilter('')}
                className="mx-auto w-24 h-24"
            >
                <Icon className={styles.icon} />
            </Link>
        </div>
    );
};
