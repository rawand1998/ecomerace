import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
function ProductsPage() {
  const [productsList, setProductsList] = useState([]);
  const productRef = collection(db, "products");
  let navigate = useNavigate();
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productRef);
      setProductsList(data.docs.map((item)=>({...item.data(),id: item.id})));
     
    };
    getProducts();
  }, []);
  
  const addCart =(id)=>{
    navigate(`/products/${id}`);

  }
  return <div className="products-firestore">
    {/* <Header /> */}
    {productsList.map((product) =>{
        
        return (
            <div className="">
          <div key={product.id} >
            <img src={product.productImg} />
            <h3>{product.prorductName}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <span>{product.category}</span>
            <button onClick={()=>addCart(product.id)}>Show Details</button>
          </div>
          </div>
        )
        
    })}
  </div>;
}

export default ProductsPage;
