import React from 'react'
import { styles } from '../../../Styles/myOrdersStyles'
import { formatEther } from 'ethers'

const NFTCard = ({title,img,price,id}) => {
  return (
    <div className={styles.card}>
        <p className='text-xs ml-1'>#{Number(id)}</p>
        <img alt={title} className='w-full h-auto relative' src={img} />
        <div className='w-[300px] -translate-y-10 text-black flex flex-col items-center justify-center absolute z-20 text-xs'>
        <p className='mb-1 max-w-[250px] h-4 mx-auto overflow-hidden'>{title}</p>
        <p className='font-bold'>{formatEther(price)} ETH</p>
      </div>
      </div>
  )
}

export default NFTCard