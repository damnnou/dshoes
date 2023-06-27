import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop';
import MyOrders from './Pages/MyOrders/MyOrders';
import Information from './Pages/Information/Information';
import OpenedSneakerCard from './Pages/Shop/Components/OpenedSneakerCard';
import Cart from './Pages/Shop/Components/Cart';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/my-orders" element={<MyOrders />}/>
          <Route path="/information" element={<Information />}/>
          <Route path="/:title" element={<OpenedSneakerCard />} /> {/* Добавленный маршрут для открытой карточки */}
          <Route path="/cart" element={<Cart />} /> {/* Добавленный маршрут для открытой карточки */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
