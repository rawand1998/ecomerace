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
    db.collection("products")
      .doc(param.id)
      .update({ amount: productAmount + 1,price:price*(productAmount+1)})
    }
    const shoppineCart = (product)=>{
        console.log("product",product)
        db.collection("cart").doc(param.id).set({product})
    }
  return (
    <div>
      <img src={product.productImg} />
      <h3>{product.productName}</h3>
      <p>{product.description}</p>
      <span>{product.price}</span>
      <span>{product.category}</span>
      <p>
        {product.amount}{" "}
        <button onClick={() => increaAmount(product.amount, product.price)}>
          +
        </button>
      </p>
      <button onClick={()=>shoppineCart(product)}>Add to cart</button>
    </div>
  );
}

export default ProductPageDetails;
