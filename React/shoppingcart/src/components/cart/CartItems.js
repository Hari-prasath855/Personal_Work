export const CartItems = (props) =>{
    const { value, remove, updateQuantity } = props
    return(
        <>
            <div className="cart-container" >
                <img className="thumbnailimg" src={value.thumbnailImage} alt="product"/>
                <div className="div-container1">
                    <h2>${value.salePrice}</h2>
                    <h3>{value.name}</h3>
                    <h4>Manufacturer : {value.manufacturer}</h4>
                    <h5>{value.shipping}</h5>
                </div>
                <div className="div-container2">
                    <button className="quantity" onClick={() => updateQuantity(value.objectID, true)}>+</button>
                    <p>{value.quantity}</p>
                    <button className="quantity" onClick={() => updateQuantity(value.objectID, false)}>-</button>
                    <button className="remove" onClick={() => remove(value.objectID)}>Remove</button>
                </div>
            </div>
        </>
    );
}