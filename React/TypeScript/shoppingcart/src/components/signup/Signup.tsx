import React, { useEffect, useRef, useState } from "react";
import ShoppingImg from "../../image/shopping.png"
import { Link, useNavigate } from "react-router-dom";

type SignUpProps = {
    users: [],
    addUsers: (val:object) => any
}
export const Signup = (props:SignUpProps) => {

    const nameInputRef = useRef<any>(null);
    const emailInputRef = useRef<any>(null);
    const passwordInputRef = useRef<any>(null);
    const navigate = useNavigate()

    const [error, setError] = useState(false);
    const [registed, setRegisted] = useState(false);

    useEffect(() => {
        nameInputRef.current.focus()
    },[])

    const headerContainer = {
        display : 'flex',
        justifyContent : 'center',
        border : '1px solid #000',
        padding : '10px'
    }

    const headerText = {
        fontSize : '30px'
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        let flag = false      
        props.users.filter((val)=>{
            if(val === email){
                flag = true;
            }
        })
        if(flag){
            setError(true)
            setRegisted(false)
        }
        if(!flag){
            setError(false)
            setRegisted(true)
            props.addUsers({name: name, email: email, password : password, cart:[]})
            setTimeout(() => navigate('/'), 1000)
        }
    }

    return(
        <>
        <header style={headerContainer}>
            <img src={ShoppingImg} alt="logo" width="40px"/>
            <span style={headerText}>Shopping Cart</span>
        </header>
        <div className="login-container">
            <form className="login-content" onSubmit={handleSubmit} >
                <h1>SignUp</h1>
                {registed && <span style={{color:'green'}}><center>Thanks for signing up.<br/> Your account has been created.</center></span>}
                {error && <span style={{color:'red'}}>Email is Already exist</span>}
                <div className="login-input">
                    <input type="text" placeholder="Name" ref={nameInputRef} required />
                    <input type="email" placeholder="Email" ref={emailInputRef} required />
                    <input type="password" placeholder="Password" ref={passwordInputRef} required />
                </div>                
                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link to={'/'}>Login</Link></p>
                <div className="footer-text">
                    <img src={ShoppingImg} alt="logo" width="20px" />
                    <span >Shopping Cart</span>
                </div>
            </form>
        </div>
        
        </>
    )
}