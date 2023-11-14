import React, { useEffect, useRef, useState } from "react";
import ShoppingImg from "../../image/shopping.png"
import { Link, useNavigate } from "react-router-dom";

type LoginProps = {
    users: [],
    updateCurrentUser: ({}) => void

}
export const Login = (props:LoginProps) => {
    const emailInputRef = useRef<any>(null);
    const passwordInputRef = useRef<any>(null);
    const [status, setStatus] = useState(false)
    const [pass, setPass] = useState(false)
    const [userExist, setUserNotExist] = useState(false)

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
    const goTOPage = (val: any) => {        
        props.updateCurrentUser(val)
        setTimeout(() => navigate('/products'), 1000)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        if(props.users.length===0){
            setUserNotExist(true)
        }else{
            setUserNotExist(false)
            props.users.filter((val: any)=>{
                if(val.email === email && val.password === password){
                    setStatus(true);
                    setPass(false)
                    goTOPage(val);
                }else if(val.email === email && val.password !== password){
                    setPass(true);
                }
            })
        }
    }

    useEffect(() => {
        emailInputRef.current.focus()
    },[])

    return(
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
                {userExist && <span style={{color:'red'}}><center>User Doesn't Exist</center></span>}
                <div className="login-input">
                    <input type="email" placeholder="Email" ref={emailInputRef} required />
                    <input type="password" placeholder="Password" ref={passwordInputRef} required />
                </div>                
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to={'/signup'}>Signup</Link></p>
                <div className="footer-text">
                    <img src={ShoppingImg} alt="logo" width="20px" />
                    <span >Shopping Cart</span>
                </div>
            </form>
        </div>
        </>
    )

}