import Modal from "react-modal";
import Navbar from "../navbar/navbar";
import { useState } from "react";
import { Card } from "./Card";
import { ProductDetails } from "./ProductDetails";

export const Products = ({data, user, updateCurrentUser}) => {
    const [record, setRecord] = useState(data)
    const [viewProduct, setViewProduct] = useState([])
    const [open, SetOpen] = useState(false);    

    const getProduct = (product) => {
        setViewProduct(product)
        SetOpen(true);
    }

    const productFilter = (searchWord) => {
        if(searchWord===''){
            setRecord(data);
        }else{
            var foundList = data.filter((list) => {
                var myResult = list.name.split(" ");
                for (let i = 0; i < myResult.length; i++) {
                    var word = myResult[i].toLowerCase();
                    searchWord = searchWord.toLowerCase(); 
                    var result = word.match(searchWord);
                    if (result)
                        return list;
                }
            })
            setRecord(foundList)
        }
    }

    // const addToCart = (id) => { 
    //     const cart = data
    //     .filter(element => element.objectID === id)
    //     .map(element => {
    //         const tempData = {...element}
    //         tempData.isInCart = true;
    //         return tempData;
    //     })
    //     console.log({...user, cart:[...cart]});
    // }

    const addToCart = (id) => { 
        const filteredElement = data.find(element => element.objectID === id);
    
        if (filteredElement) {
            const updatedUser = { 
                ...user, 
                cart: [...user.cart, filteredElement] 
            };
            updateCurrentUser(updatedUser)
        } else {
            console.log("Element not found in data array.");
        }
    }
    

    const product = record.map((item) => {
        return <Card key={item.objectID} value={item} setData={getProduct}/>
    })

    const details = viewProduct.map((item) => {
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
    );
}