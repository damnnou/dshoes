import React from 'react'
import { styles } from '../../../Styles/shopStyles'
import {Link} from 'react-router-dom'
import {setFilter} from '../Redux/filter/filter.slice'
import { useDispatch } from 'react-redux'

const LeftMenu = () => {

  const dispatch = useDispatch();

  const changeFilter = (filt) => {
    console.log(filt);
    dispatch(setFilter(filt));
  }

  return (
    <div className='flex justify-left items-center pl-12 w-[10%] h-0 bg-white z-20 sticky top-[50%]'>
      <ul>
      <Link to="/shop" onClick={() => changeFilter('hi')}><li className={styles.filter}>All</li></Link>
        <Link to="/shop" onClick={() => setFilter('jordan')}><li className={styles.filter}>Jordan</li></Link>
        <Link to="/shop"><li onClick={() => setFilter('dunk')} className={styles.filter}>Dunk</li></Link>
        <Link to="/shop"><li onClick={() => setFilter('zoom')} className={styles.filter}>Zoom</li></Link>
        <Link to="/shop"><li onClick={() => setFilter('yeezy')} className={styles.filter}>Yeezy</li></Link>
        <Link to="/shop"><li onClick={() => setFilter('travis scott')} className={styles.filter}>Travis Scott</li></Link>
        <Link to="/shop"><li onClick={() => setFilter('gallery dept')} className={styles.filter}>Gallery Dept</li></Link>
        <Link to="/shop"><li onClick={() => setFilter('fragment design')} className={styles.filter}>Fragment Design</li></Link>
        <Link to="/"><li className='text-neutral-500 mt-8 mb-2 text-xs cursor-pointer'>Home</li></Link>
        <Link to="/information"><li className='text-neutral-500 mb-2 text-xs cursor-pointer'>Information</li></Link>
        <Link to="/my-orders"><li className='text-neutral-500 mb-2 text-xs cursor-pointer'>My orders</li></Link>
      </ul>
    </div>
  )
}

export default LeftMenu