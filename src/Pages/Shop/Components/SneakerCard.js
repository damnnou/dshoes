import React from 'react'
import { styles } from '../../../Styles/shopStyles'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

const SneakerCard = ({title, link, price, img, id, color, date}) => {
  return (
      <Link to={`/${link}`} state={{ title, price, img, id, color, date }}>
        <div className={styles.card}>
        <img className='w-full h-auto relative' src={img} />
        <div className='w-[300px] -translate-y-40 text-transparent flex flex-col items-center justify-center absolute z-20 text-xs'>
        <p className='mb-1 max-w-[250px] h-4 mx-auto overflow-hidden'>{title}</p>
        <p>{price} $</p>
        </div>
    </div>
    
    </Link>
  )
}

export default SneakerCard