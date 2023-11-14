import { useNavigate } from "react-router-dom";
import { BillingCard } from "./BillingCard";
import { Navbar } from "../navbar/Navbar";

type BillingProps = {
    user: any
}

export function Billing(props:BillingProps) {
    const {user } = props;
    const data = (user ? user.cart : [])
    let index = 0;
    let amount = 0
    const items = data.map((element: any) => {
        amount += (element.salePrice * element.quantity);
        index++;
        return <BillingCard key={element.objectID} value={element} index={index}/>
    })

    const navigate = useNavigate();
    return (
        <>
            <Navbar inputField={false} value={data.length}/>
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