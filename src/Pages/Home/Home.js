import React from 'react'
import videoBg from '../../Assets/videoBg.mp4';
import { styles } from '../../Styles/appStyles';
import { Link } from 'react-router-dom';
import { MdSnowshoeing as Icon } from 'react-icons/md'


const Home = () => {
  return (
    <div className={styles.app}>
        <video className={styles.video} src={videoBg} type="video/mp4" autoPlay loop muted />
        <div className={styles.menu}>
          <Link to="/shop" className={styles.link}>Shop</Link>
          <Link to="/my-orders" className={styles.link}>My Orders</Link>
          <Link to="/information" className={styles.link}>Information</Link>
          <p className={styles.link}>DECENTRALIZED SNEAKER MARKET</p>
        </div>
        <Icon className={styles.icon}/>
      </div>
  )
}

export default Home