import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import { styles } from '../../../Styles/shopStyles';
import { ethers } from "ethers"; 

const Cart = ({contract, setConnectedWallet, connectedWallet}) => {

  let provider;
  let signer;

    const connectWallet = async() => {
        if (window.ethereum == null) {
            console.log("MetaMask not installed; using read-only defaults");
            provider = ethers.getDefaultProvider();
            setConnectedWallet(provider);    
        } else {
            provider = new ethers.BrowserProvider(window.ethereum);
            signer = await provider.getSigner();
            setConnectedWallet(signer);
        }
    }

    const cartItems = useSelector(state => state.cart);

    const navigate = useNavigate();

    if (cartItems.length === 0) {
    // If the cart is empty, perform automatic redirection to the home page
    navigate('/shop');
    // You can also return null here to avoid rendering anything on the page.
  }
    return (
      <div className='relative mx-auto w-max'>
          <Link to='/cart' className={`${styles.filter} invisible `}>{cartItems.length > 0 ?? `CART (${cartItems.length})`}</Link>
          <Header setFilter={() => ''} />
      {cartItems.length === 0 ?<p className='my-12'>Cart is empty</p> : cartItems.map((item, index) => (
          <CartItem
            key={index}
            id={item.id}
            title={item.title}
            img={item.img}
            color={item.color}
            price={item.price}
            connectedWallet={connectedWallet}
            connectWallet={() => connectWallet()}
            contract={contract}
          />
      ))}


      </div>
    )
  }
  
  export default Cart