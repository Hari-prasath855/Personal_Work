type CardProps = {
    value: any,
    setData:(item:any) => any,
}
export const Card = (props: CardProps) => {
    const {value, setData } = props
   return (
       <>
        <div className="product" onClick={() => setData([value])} >
            <img src={value.thumbnailImage} alt="product" />
            <span><h2>$ {value.salePrice}</h2><br/>
            <h4>{value.name}</h4>
            Quantity : {value.quantity}<br/>
            Manufacturer: {value.manufacturer}<br/>
            {value.shipping}
            </span>
        </div>
       </>
   )
}