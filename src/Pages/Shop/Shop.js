import React from 'react'
import { LeftMenu, Header, Body } from './Components'
import { styles } from '../../Styles/shopStyles'
import { Link} from 'react-router-dom'

const Shop = ({filter, setFilter}) => {

  return (
    <div className='relative'>

        <Link to="/cart" className={`${styles.filter} hover:underline w-fit flex ml-auto sticky top-2`}>CART (1)</Link>
        <LeftMenu setFilter={setFilter} />
        <Header setFilter={setFilter} />
        <Body filter={filter} />
    </div>
  )
}

export default Shop