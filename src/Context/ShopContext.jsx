import React,{createContext, useState} from "react";
import all_products from "../Components/Assests/all_product"

export const ShopContext = createContext(null)


const getDefaultCart=()=>{
    let cart ={};
    for(let i=0;i<all_products.length+1;i++){
        cart[i]=0;    
    }
    return cart;

}


const ShopContextProvider = (props)=>{
    const[cartItems,setCartItems] = useState(getDefaultCart());
    
    const addToCart =(itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        console.log(cartItems);
        
    }
    
    const removeFromCart=(itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }


    const getTotalCartAmount=()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo = all_products.find((product)=>product.id===Number(item))
                totalAmount += iteminfo.new_price * cartItems[item];
            }
            return totalAmount;
        }
    }
    
    
    const contextValue = {getTotalCartAmount,all_products,cartItems,addToCart,removeFromCart};

    
    
    return (
        <ShopContext.Provider value={contextValue} >
        {props.children}
        </ShopContext.Provider>
        
        )
}

export default ShopContextProvider




