import React from 'react'
import {Link } from 'react-router-dom';
import Header from './Header';
import { styles } from '../../../Styles/shopStyles';
import testImg from '../../../Assets/sn1.jpg'

const Cart = () => {
  return (
    <div className='relative'>
        <Link to='/cart' className={`${styles.filter} w-fit flex ml-auto sticky top-2 hover:underline `}>CART (1)</Link>
        <Header setFilter={() => ''} />
        <div className={styles.cart}>
            <div className={styles.cartItem}>
                <img alt="test" className='w-64 h-auto mr-48' src={testImg} />
                <div className='h-fit my-auto mr-48 '>
                    <p className={styles.filter}>Pop & Gleneagles Oracle Jacket Tartan</p>
                    <p className={styles.filter}>Medium</p>
                    <p className='underline text-red-500 text-xs mt-3'>remove</p>
                </div>
                <p className='mx-auto mr-48 text-xs'>150.00$</p>
                <button className={styles.addbutton + ''}>checkout</button>
            </div>
        </div>
        </div>

  )
}

export default Cart