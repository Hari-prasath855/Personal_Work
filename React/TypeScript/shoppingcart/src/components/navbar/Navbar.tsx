import ShoppingImg from "../../image/shopping.png"
import searchIcon from "../../image/search.png"
import { Link } from "react-router-dom";

type NavProps = {
    inputField:boolean,
    searchProduct?: (item:any) => any,
    value: Number

}
export const Navbar = (props:NavProps) => {
    const {inputField, searchProduct, value} = props
    var searchWord: string = '';
    
    return (
        <>
        <nav>
            <div className="logo">
                <img src={ShoppingImg} alt="logo" width="40px" />
                <span>Shopping Cart</span>
            </div>
            {(inputField && searchProduct ) && <div className="search">
                <input type="text" onChange={(e) => {searchWord = e.target.value; searchProduct(searchWord);}} placeholder="Search..." />
                <button><img src={searchIcon} alt="search" width="14px"/></button>
            </div>}
            <div>
                <Link to={'/products'}>Products</Link>
                <Link to={'/cart'}>Cart({value.toString()})</Link>
                <Link to={'/'}>Logout</Link>
            </div>
        </nav>
        </>
    )
}