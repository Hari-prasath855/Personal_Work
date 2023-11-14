import closeIcon from '../../image/cross.png'

type ProductDetailsProps = {
    value: any,
    addToCart: (id: any) => any,
    close: () => any
}
export const ProductDetails = (props: ProductDetailsProps) => {
    const{ value, addToCart, close } = props
    const button = () => {
        let root: any = document.getElementById('btn')
        root.innerHTML = 'Added!'
    }
   return (
    <div className="item-container">
        <div className="item-heading">
            <h1 style={{margin:'0 25px'}}>Product Details</h1>
            <button style={{backgroundColor:'transparent', outline:'none', border:'none', cursor:'pointer', margin:'0 20px'}} onClick={() => {close()}}><img src={closeIcon} alt='close' width='25px'/></button>
        </div>
        <hr style={{width:'100%',margin:'10px auto'}}/>
        {value ? 
                <div className="item-content">
                    <img src={value.image} alt="product"/>
                    <div className="item-div">                        
                        <h1>{value.name}</h1>
                        <h2>Manufacturer : {value.manufacturer}</h2>
                        <h3>{value.shortDescription}</h3>
                        <h4>{value.shipping}</h4>
                    </div>
                    <div className="item-div2">
                        <h1>$ {value.salePrice}</h1>
                        <button id="btn" onClick={() => {button(); addToCart(value.objectID);}} className="button-purple" style={{width:'50%'}}>
                        {(value.isInCart)? "Added!": "Add To Cart"}
                        </button>
                    </div>
                </div> 
                :
                <h1>Nothing Found</h1>}
    </div>
   )
}
