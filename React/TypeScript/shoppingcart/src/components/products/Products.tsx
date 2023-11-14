import Modal from "react-modal";
import { useState } from "react";
import { Card } from "./Card";
import { ProductDetails } from "./ProductDetails";
import { Navbar } from "../navbar/Navbar";
import { log } from "console";

type ProductProps = {
     data: any,
     user: {name: string, email: string, password : string, cart:[]},
     updateCurrentUser: (user:object) => any
}
export const Products = (props: ProductProps) => {
    const {data, user, updateCurrentUser} = props
    const [record, setRecord] = useState(data[0])
    const [viewProduct, setViewProduct] = useState([])
    const [open, SetOpen] = useState(false);

    const getProduct = (product:[]) => {
        setViewProduct(product)
        SetOpen(true);
    }

    const productFilter = (searchWord: string) => {
        var foundList = data[0].filter((list:any) => {
            var myResult = list.name?.split(" ");
            for (let i = 0; i < myResult?.length; i++) {
                var word = myResult[i].toLowerCase();
                searchWord = searchWord.toLowerCase(); 
                var result = word.match(searchWord);
                if (result)
                    return list;
            }
        })
        setRecord(foundList)
    }

    const addToCart = (id: any) => { 
        const filteredElement = data[0].find((element: any) => element.objectID === id);
        
        var checker:boolean = true;

        user.cart.forEach((element: any) => {
            if(element.objectID===id){
                checker = false
            }
        });
        if (checker) {
            const updatedUser = { 
                ...user, 
                cart: [...user.cart, filteredElement] 
            };
            updateCurrentUser(updatedUser)
        } else {
            console.log("Already Added!");            
        }
    }

    const product = record.map((item: any) => {
        return <Card key={item.objectID} value={item} setData={getProduct}/>
    })

    const details = viewProduct.map((item: any) => {
        return <ProductDetails key={item.objectID} value={item} addToCart={addToCart} close={()=> SetOpen(false)}/>
    })


    const customStyles = {
        content: {
            top:'15%',
          width:'90%',
          height:'max-content',
          overflow:'hidden',
          padding :'30px',
          borderRadius:'50px',
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px,rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
        },
      };

    return (
        <>
        <Navbar inputField={true} searchProduct={productFilter} value={(user.cart).length}/>
            <div className="home-container">
                <div className="home-content">
                    {product.length === 0 ? <h1>Found Nothing</h1> : product}
                    <Modal isOpen={open} ariaHideApp={false} style={customStyles}>
                        {details}
                    </Modal>
                </div>
            </div>
        </>
    )
}