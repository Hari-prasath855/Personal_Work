type BillingProps = {
    value: any,
    index: any
}
export function BillingCard(props:BillingProps) {
    const {value, index} = props
    return (
        <>
            <div className="buy-container" >
                <span> {index}</span>
                <span><img style={{width:'70px', objectFit:'contain'}}  src={value.thumbnailImage} alt="product"/></span>
                <span> {value.name} </span>
                <span> {value.quantity} </span>
                <span>$ {value.salePrice} </span>
                <span>${(value.salePrice * value.quantity).toFixed(2)}</span>
            </div>
        </>
    )
}