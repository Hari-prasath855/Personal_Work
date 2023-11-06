import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import { CartItems } from "./CartItems";
import { useNavigate } from "react-router-dom";

export const Cart = ({user,updateCurrentUser}) =>{
    const data = (user ? user.cart : [])
    const [cartProducts, setCartProducts] = useState([]);

    const navigate = useNavigate()
    const remove = (id) => {
        const data = (user ? user.cart : [])

        const items= []
        data.forEach(element => {
            if(element.objectID !== id){
                items.push(<CartItems key={element.objectID} value={element} remove={remove} updateQuantity={updateQuantity}/>)
            }
        })

        const cart = data.filter((element)=>{
            if(element.objectID !== id){
                return element
            }
        })
    
        if (cart) {
            const updatedUser = { 
                ...user, 
                cart: cart 
            };
            updateCurrentUser(updatedUser)
        } else {
            console.log("Element not found in data array.");
        }
        setCartProducts(items);            
    }

    const updateQuantity = (id, action) => {
        console.log("UPDATe");
        const data = (user ? user.cart : [])
        const items = data.map((element)=>{
            if(element.objectID === id && action){
                element.quantity += 1;
            }else if(element.objectID === id && element.quantity>1){
                element.quantity -= 1;
            }
            console.log(element);
            return <CartItems key={element.objectID} value={element} remove={remove} updateQuantity={updateQuantity}/>
        })   
        setCartProducts(items)
    }

    const getData= () => { 
        console.log("GETdata");
        const data = (user ? user.cart : [])
        const items = data.map((item)=>{
            return  <CartItems key={item.objectID} value={item} remove={remove} updateQuantity={updateQuantity}/>
        })  
        setCartProducts(items)
    }

    useEffect(()=>{
        getData();
    },[updateCurrentUser])

    return(
        <>
            <Navbar inputField={false} value={data.length}/>
            <div className="buy">
                <h1>Cart</h1>
                <button className="button-purple" style={{width:'10%'}} onClick={() => {cartProducts.length && navigate('/billing')}}>Proceed To Buy </button>
            </div>
            { cartProducts.length!==0? cartProducts : <center><h2>"Nothing Found"</h2></center>}
        </>
    );
}