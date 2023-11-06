import { useState } from "react";
import Navbar from "../navbar/navbar";
import { useNavigate } from "react-router-dom";

export function Payment({ user, removeAll }) {
    const data = (user ? user.cart : [])
    const [btn1, setBtn1 ] = useState(false)
    const [btn2, setBtn2 ] = useState(false)
    const navigate = useNavigate()
    return (
        <>
        <Navbar value={data.length}/>
        <center>
            <h1>Payment Method</h1>
            <div className="payment-head"><input className="checkbox" type="checkbox" onChange={() => setBtn1(!btn1)} />Credit or Debit Card </div>
            {btn1 && 
            <form className="pay-content" onSubmit={(e) => {e.preventDefault(); removeAll(); navigate('/order-confirmation')}}>
                <h3>Card details</h3>
                <input placeholder="Enter card number" required />
                <div style={{display: 'flex', width:'88%'}}>
                    <input placeholder="Month" required />
                    <input placeholder="Year" required />
                </div>
                <br/>
                    <button className="button-purple" style={{width:'50%', marginBottom:'10px'}}>Pay</button>
            </form>}
            <div className="payment-head"><input className="checkbox" type="checkbox" onChange={() => setBtn2(!btn2)} />UPI </div>
            {btn2 && 
            <form className="pay-content" onSubmit={(e) => {e.preventDefault(); removeAll(); navigate('/order-confirmation')}}>
                <h3>UPI ID</h3>
                <input placeholder="Enter UPI Id" required />
                <br/>
                    <button className="button-purple" style={{width:'50%', margin:'10px'}}>Pay</button>
            </form>}
            <br/>
        </center>
        </>
    )

}