import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart/cart.slice';
import { bindActionCreators } from '@reduxjs/toolkit';

const allActions = {
    ...cartActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
};
