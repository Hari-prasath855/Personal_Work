import { useEffect, useState } from "react";
import { CartItems } from "./CartItems";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

type ProductProps = {
    user: {name: string, email: string, password : string, cart:[]},
    updateCurrentUser: (user:object) => any
}

export const Cart = (props: ProductProps) =>{
    const {user, updateCurrentUser} = props
    const data = (user ? user.cart : [])
    const [cartProducts, setCartProducts] = useState<any>([]);

    const navigate = useNavigate()
    const remove = (id:any) => {
        const data = (user ? user.cart : [])
        const items: any = [];
        data.forEach((element: any) => {
            if(element.objectID !== id){
                items.push(<CartItems key={element.objectID} value={element} remove={remove} updateQuantity={updateQuantity}/>)
            }else{
                element.quantity = 1;
            }
        })

        const cart = data.filter((element: any)=>{
                return element.objectID !== id
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

    const updateQuantity = (id: any, action: boolean) => {
        const items = data.map((element: any)=>{
            if(element.objectID === id && action){
                element.quantity += 1;
            }else if(element.objectID === id && element.quantity>1){
                element.quantity -= 1;
            }
            return <CartItems key={element.objectID} value={element} remove={remove} updateQuantity={updateQuantity}/>
        })   
        setCartProducts(items)
    }

    const getData= () => { 
        const items = data.map((item: any)=>{
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