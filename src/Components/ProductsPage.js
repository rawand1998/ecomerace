import React, { useState, useEffect } from "react";
import firebase from "../firebase";
// import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
function ProductsPage() {
  const [productsList, setProductsList] = useState([]);
  const [selected,setSelected] = useState('');
  const db = firebase.firestore();
  const productRef = collection(db, "products");
  let navigate = useNavigate();
  useEffect(() => {
    const getProducts =  () => {
      console.log(selected,"===========")
     const data = db.collection('products').where('category', '==', selected).get().then((res)=>{
      console.log("res",res)
      setProductsList(
        res.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
    
     });
     console.log(data);

      
      
    };
    getProducts();
  }, [selected]);

  const addCart = (id) => {
    navigate(`/products/${id}`);
  };
  
 

  return (
    <div className="products-firestore">
      <select  onChange={(e)=>setSelected(e.target.value)} value={selected}>
        <option value="shoe">shoe</option>
        <option value="bag">bag</option>
        <option value="woman">woman</option>
      </select>
      {productsList.map((product) => {
        return (
          <div className="">
            <div key={product.id} className="product">
              <img src={product.productImg} />
              <div className="pro">
                <h3>{product.prorductName}</h3>

                <span>Price: {product.price}$</span>
                <br />
                <span>Category: {product.category}</span>
                <br />
              </div>
              <button onClick={() => addCart(product.id)}>Show Details</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsPage;
