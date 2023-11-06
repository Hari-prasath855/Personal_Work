import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";
import { BillingCard } from "./BillingCard";

export function Billing({ user }) {
    const data = (user ? user.cart : [])
    let index = 0;
    let amount = 0
    const items = data.map((element) => {
        amount += (element.salePrice * element.quantity);
        index++;
        return <BillingCard key={element.objectID} value={element} index={index}/>
    })

    const navigate = useNavigate();
    return (
        <>
            <Navbar value={data.length}/>
            <center>
                <div className="buy-container">
                    <span>S.No</span>
                    <span></span>
                    <span>Name</span>
                    <span>Quantity</span>
                    <span>Rate</span>
                    <span>Price</span>
                </div>
                {items}
                
                <div className="buy-btn">
                    <button className="button-purple" onClick={() => navigate('/payment')}>Buy({amount.toFixed(2)})</button>
                </div>
            </center>
        </>
    )
}