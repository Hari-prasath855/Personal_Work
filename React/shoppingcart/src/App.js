import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { Products } from './components/products/Products';
import { Cart } from './components/cart/Cart';
import React, { useState } from 'react';
import { Billing } from './components/billing/Billing';
import { Payment } from './components/payment/Payment';
import { Order } from './components/order-placed';
import useFetch from './components/custom hook/useFetch';

export const DataContext = React.createContext();




function App() {

const [users, setUsers] = useState([]);
const [currentUser,setcurrentUser] = useState();

const [data] = useFetch();

const addUser = (user) => {
    setUsers([...users, user])
}

const updateCurrentUser = (user) => {
    console.log(user);
    setcurrentUser(user);    
    setUsers([...users, user])
}

const removeAll = () => {
    const updatedUser = { 
        ...users, 
        cart: [] 
    };
    updateCurrentUser(updatedUser)
}

 return (
    <>
      {data && <BrowserRouter>
        <Routes>
          <Route path='' element={<Login users={users} getcurrentUser={updateCurrentUser}/>} />
          <Route path='signup' element={<Signup users={users} addUser={addUser} />} />
          <Route path='products' element={<Products data={data} user={currentUser} updateCurrentUser={updateCurrentUser}/>} />
          <Route path='cart' element={<Cart user={currentUser} updateCurrentUser={updateCurrentUser}/>} />
          <Route path='billing'element={<Billing user={currentUser}/>}/>
          <Route path='payment'element={<Payment user={currentUser} removeAll={removeAll}/>}/>
          <Route path='order-confirmation' element={<Order/>} />
        </Routes>
      </BrowserRouter>}
    </>

  );
}

export default App;
