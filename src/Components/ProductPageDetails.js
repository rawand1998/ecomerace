import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import firebase from "../firebase";
import { getDocs, collection, query, doc,addDoc } from "firebase/firestore";
function ProductPageDetails() {
  const db = firebase.firestore();
  const param = useParams();

  const [product, setProduct] = useState([]);
 
  useEffect(() => {
    const getproductDetails = async () => {
      db.collection("products")
        .doc(param.id)
        .get()
        .then((product) => {
          setProduct(product.data());
        });
    };
    getproductDetails();
  });

  const increaAmount = (productAmount, price) => {
    console.log(price,"==========")
    db.collection("products")
      .doc(param.id)
      .update({ amount: productAmount +1, price:price * (++productAmount)})
    }
    const shoppineCart = (productName,productAmount,productPrice)=>{
        console.log("product",productName,productAmount,productPrice)
        db.collection("cart").doc(param.id).set({
            productName:productName,
            amount:productAmount,
            price:productPrice
        })
    }
  return (
    <div className="details">
    <div className="product-details">
      <img src={product.productImg} />
      <div className="product-details-description">
        <span className="productName">product Name</span>
      <h3>{product.prorductName}</h3>
      <span className="productDescription">product description</span>
      <p>{product.description}</p>
      <span className="price">price: {product.price}</span>
      <span className="price">Category: {product.category}</span>
      
      <p className="amount">
        Amount:
        {product.amount}{" "}
        <button className="btn-amount"onClick={() => increaAmount(product.amount,product.price)}>
          +
        </button>
      </p>
      <button className="btn-details" onClick={()=>shoppineCart(product.prorductName,product.amount, product.price)}>Add to cart</button>
      </div>
    
     
    </div>
  
    </div>
  );
}

export default ProductPageDetails;
