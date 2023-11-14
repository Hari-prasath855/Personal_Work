import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import { useFetch } from './components/custom hook/useFetch';
import { useEffect, useState } from 'react';
import { Signup } from './components/signup/Signup';
import { Login } from './components/login/Login';
import { Products } from './components/products/Products';
import { Cart } from './components/cart/Cart';
import { Billing } from './components/billing/Billing';
import { Payment } from './components/payment/Payment';
import { Order } from './components/order-placed';

function App() {
  const data = useFetch();

  const [users, setUsers] = useState<any>([]);
  const [currentUser, setcurrentUser] = useState<{name: string, email: string, password : string, cart:[]}>({name: 'name', email: 'email', password : 'password', cart:[]})

  const addUser = (user: object) => {
    setUsers([...users, user])
    
  }

  const updateCurrentUser = (user:any) => {
    setcurrentUser(user)
    const userList = users.map((element: any)=>{
      if(element.email === user.email){
        return user;
      }
      return element;
    })
    console.log(userList);
    setUsers(userList)
  }

  const removeAll = () => {
    const updatedUser = { 
        ...users, 
        cart: [] 
    };
    updateCurrentUser(updatedUser)
}

  useEffect(()=>{
    console.log(users);
    
  },[users])
 
  return (
    <>
    {data && 
      <BrowserRouter>
          <Routes>
            <Route path='' element={<Login users={users} updateCurrentUser={updateCurrentUser}/>} />
            <Route path='/signup' element={<Signup users={users} addUsers={addUser}/>} />
            <Route path='/products' element={<Products data={data} user={currentUser} updateCurrentUser={updateCurrentUser}/>}/>
            <Route path='/cart' element={<Cart user={currentUser} updateCurrentUser={updateCurrentUser}/>}/>
            <Route path='billing'element={<Billing user={currentUser}/>}/>
            <Route path='payment'element={<Payment user={currentUser} removeAll={removeAll}/>}/>
            <Route path='order-confirmation' element={<Order/>} />
          </Routes>
      </BrowserRouter>
    }
    </>
  );
}

export default App;
