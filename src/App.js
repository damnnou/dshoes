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

const App = () => {

  const [filter, setFilter] = useState('');

  return (
    <Provider store={store}>
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop setFilter={setFilter} filter={filter} />} />
          <Route path="/my-orders" element={<MyOrders />}/>
          <Route path="/information" element={<Information />}/>
          <Route path="/:title" element={<OpenedSneakerCard setFilter={setFilter} filter={filter}  />} />
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
};

export default App;
