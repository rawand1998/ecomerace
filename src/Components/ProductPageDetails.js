import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
// import { db } from "../firebase";
import firebase from "../firebase";
import { getDocs, collection, query,doc } from "firebase/firestore";
function ProductPageDetails() {
  const db = firebase.firestore();
  const param = useParams();
 
  const [product,setProduct]=useState([]);
  useEffect(() => {

    const getproductDetails = async () => {
        db.collection('products').doc(param.id).get().then((product) => {
            setProduct(product.data())
        })
 
    };
    getproductDetails();
  });
  const increaAmount = (productAmount)=>{
    db.collection('products').doc(param.id).update({amount : productAmount+1})
   
  }
  return <div>

          <img src={product.productImg} />
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <span>{product.category}</span>
            <p>{product.amount} <button onClick={()=>increaAmount(product.amount)}>+</button></p>
    </div>;
}

export default ProductPageDetails;
