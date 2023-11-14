import { useNavigate } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

export function Order() {
    const navigate = useNavigate();
    return(
        <>
        <Navbar inputField={false} value={0} />
        <center>
            <h1>Thank you<br/>Order Successfully Placed</h1>
            <br/>
            <button className="button-purple" style={{width:'14%'}} onClick={() => navigate('/products')}>Back to Home</button>
        </center>
        </>
    )

}