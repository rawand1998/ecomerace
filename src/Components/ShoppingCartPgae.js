import React,{useState,useEffect} from 'react'

import firebase from "../firebase";
import { getDocs, collection, query, doc,addDoc } from "firebase/firestore";

function ShoppingCartPgae() {
    const [productInCart,setProductInCart] =useState([]);
    const db = firebase.firestore();
    const cartRef = collection(db,'cart');
    useEffect(() => {
        
  const getProductsInCart = async()=>{
    const data = await getDocs(cartRef)
    setProductInCart(data.docs.map((item)=>({...item.data(),id: item.id})));
    //   setProductInCart(data.docs.map((item)=>console.log(item.data())));

   

  }
  getProductsInCart()
    },[])

  return<div>
   
   {productInCart.map((product) =>{
        return (
          <div key={product.id}>
     
            <h3>{product.productName}</h3>
          
            <span>{product.price}</span><br />
            <span>{product.amount}</span>
            
        
          </div>
            
        )
    })}
  </div>;
}

export default ShoppingCartPgae