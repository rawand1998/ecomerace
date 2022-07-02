import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { db } from "../firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
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
    navigate(`/details/page/${id}`);

  }
  return <div>
    {productsList.map((product) =>{
        return (
          <div>
            <img src={product.productImg} />
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <span>{product.category}</span>
            <button onClick={()=>addCart(product.id)}>Show Details</button>
          </div>
            
        )
    })}
  </div>;
}

export default ProductsPage;
