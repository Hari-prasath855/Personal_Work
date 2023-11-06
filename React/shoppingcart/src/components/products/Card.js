export const Card = (props) =>{
    const {value, setData } = props
    const arr = []
    return(
        <>
        <div className="product" onClick={()=> {arr.push(value); setData(arr)}}>
            <img src={value.thumbnailImage} alt="product" />
            <span><h2>$ {value.salePrice}</h2><br/>
            <h4>{value.name}</h4>
            Quantity : {value.quantity}<br/>
            Manufacturer: {value.manufacturer}<br/>
            {value.shipping}
            </span>
        </div>
</>
    );
}