import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import firebase from "../firebase";
import { getDocs, collection, query, doc,addDoc } from "firebase/firestore";
import NavBar from "./NavBar";
import SubNavBar from "./SubNavBar";
import Footer from "./Footer";
import { auth } from "../firebase";
import {checkLogin} from '../hooks'
function ProductPageDetails() {
  const db = firebase.firestore();
  const param = useParams();

  const [product, setProduct] = useState([]);
  const [success,setSuccess]= useState('')
  const[Msg,setMsg]=useState("")
 
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
      .update({ amount: productAmount +1, price:price * (++productAmount)})
    }
    const shoppineCart = (productName, productAmount, productPrice) => {
      auth.onAuthStateChanged((user) => {
        if (user) {
      
          db.collection("cart").doc(param.id).set({
            productName: productName,
            amount: productAmount,
            price: productPrice,
          });
          setSuccess("Product add to cart successfully");
        } else {
          setMsg("You Should To Be Login!");
          
        }
      });
    };
    const decreaAmount =(productAmount,price)=>{
      db.collection("products")
      .doc(param.id)
      .update({ amount: productAmount -1, price:price * (--productAmount)})
    }
  return (
    <div className="details">
      <NavBar />
      {/* <SubNavBar /> */}
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
        Amount: {" "}
        {product.amount}
        <div className="amount-btns">
        <FaPlus onClick={() => increaAmount(product.amount,product.price)} className="amount-inc"/> 
       <FaMinus onClick={() => decreaAmount(product.amount,product.price)} className="amount-dec"/>
       </div>
      </p>
   
      <button className="btn-details" onClick={()=>shoppineCart(product.prorductName,product.amount, product.price)}>Add to cart</button>
           {success && <p className="success">{success}</p>}
      {Msg &&<p className="error">{Msg}</p>}
      </div>
    
     
    </div>
  <Footer />
    </div>
  );
}

export default ProductPageDetails;
