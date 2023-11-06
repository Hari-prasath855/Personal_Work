import React, { useEffect, useRef, useState } from "react";
import ShoppingImg from "../../image/shopping.png"
import { Link, useNavigate } from "react-router-dom";

import '../../Style.css'

function Login({ users, getcurrentUser }){
    
    
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
   

    useEffect(() => {
        emailInputRef.current.focus()
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

    const navigate = useNavigate()
    const goTOPage = (val) => {
        getcurrentUser(val)
        setTimeout(() => navigate('/products'), 1000)
    }
    
    const [status, setStatus] = useState(false)
    const [pass, setPass] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        users.filter((val)=>{
            if(val.email === email && val.password === password){
                setStatus(true);
                setPass(false)
                console.log(",",val);
                goTOPage(val);
            }else if(val.email === email && val.password !== password){
                setPass(true);
            }
        })
        
    }

    return (
        <>
        <header style={headerContainer}>
            <img src={ShoppingImg} alt="logo" width="40px"/>
            <span style={headerText}>Shopping Cart</span>
        </header>
        <div className="login-container">
            <form className="login-content" onSubmit={handleSubmit}>
                <h1>Login</h1>
                {status && <span style={{color:'green'}}><center>Successfully Login</center></span>}
                {pass && <span style={{color:'red'}}><center>Incorrect Password</center></span>}
                <div className="login-input">
                    <input type="email" placeholder="Email" ref={emailInputRef} required />
                    <input type="password" placeholder="Password" ref={passwordInputRef} required />
                </div>                
                <button type="submit" onClick={handleSubmit}>Login</button>
                <p>Don't have an account? <Link to={'/signup'}>Signup</Link></p>
                <div className="footer-text">
                    <img src={ShoppingImg} alt="logo" width="20px" />
                    <span >Shopping Cart</span>
                </div>
            </form>
        </div>
        </>
    );

}

export default Login