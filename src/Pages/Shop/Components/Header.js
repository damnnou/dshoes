import React from 'react'
import { Link } from 'react-router-dom'
import { MdSnowshoeing as Icon } from 'react-icons/md'
import { styles } from '../../../Styles/shopStyles'

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to='/shop' className='mx-auto w-24 h-24'><Icon className={styles.icon} /></Link>
    </div>
  )
}

export default Header