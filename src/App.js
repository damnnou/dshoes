import React, {useState} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop';
import MyOrders from './Pages/MyOrders/MyOrders';
import Information from './Pages/Information/Information';
import OpenedSneakerCard from './Pages/Shop/Components/OpenedSneakerCard';
import Cart from './Pages/Shop/Components/Cart';
import { Provider } from 'react-redux';
import { store } from './Pages/Shop/Redux/store';
import { ethers } from 'ethers';


const App = () => {

  const [connectedWallet, setConnectedWallet] = useState(null);

  const contractAddress = '0x62B36De55E9507e3abAf131383B22E60f55F29e0';
  const contractAbi = [
            "function createNFT(string title, string img, uint256 price, uint256 id) payable returns (uint256)",
            "function getNFT(uint256 tokenId) view returns (string memory, string memory, uint256, uint256)",
            "function getNFTByAddress(address _buyer) view returns (tuple(string title, string img, uint256 price, uint256 id)[] NFT)"
        ]
  const contract = new ethers.Contract(contractAddress, contractAbi, connectedWallet);

  return (
    <Provider store={store}>
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/my-orders" element={<MyOrders contract={contract} connectedWallet={connectedWallet} setConnectedWallet={setConnectedWallet} />}/>
          <Route path="/information" element={<Information />}/>
          <Route path="/:title" element={<OpenedSneakerCard />} />
          <Route path="/cart" element={<Cart contract={contract} connectedWallet={connectedWallet} setConnectedWallet={setConnectedWallet} />} /> 
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
};

export default App;
