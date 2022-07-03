import React, { useState, useEffect } from "react";
import firebase from "../firebase";
// import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
function ProductsPage() {
  const [productsList, setProductsList] = useState([]);
  const [selected, setSelected] = useState("clothes");
  const db = firebase.firestore();
  const productRef = collection(db, "products");
  let navigate = useNavigate();
  useEffect(() => {
    const getProducts = () => {
      db.collection("products")
        .where("category", "==", selected)
        .get()
        .then((res) => {
          setProductsList(
            res.docs.map((item) => ({ ...item.data(), id: item.id }))
          );
        });
    };

    getProducts();
  }, [selected]);

  const addCart = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div>
      <NavBar />
      <div className="sub-navabr">
        <a>new in</a>
        <a>summer fits</a>
        <a>going out</a>
        <a>dresses</a>
        <a>occasion</a>
        <a>tops</a>
        <a>trousers</a>
        <a>clothing</a>
        <a>shop by body fit</a>
        <a>shoes</a>
        <a>mg kids</a>
        <a>homeware</a>
        <a>sale</a>
      </div>
      <div className="pink-navbar">
        <div className="pink">
          <h3>SUMMAR IS HERE!</h3>
          <p>Shop summar outfits</p>
        </div>
        <div className="pink2">
        <h3>50% FOR EVERYTHING!CODE:TAVER</h3>
          <p>limit time only</p>
        </div>
        <div className="pink3">
        <h3>EVERY THING MUST GO!</h3>
          <p>secure the bag now</p>
        </div>
      </div>
      <select onChange={(e) => setSelected(e.target.value)} value={selected}>
        <option value="clothes">clothes</option>
        <option value="bag">bag</option>
        <option value="shoe">shoe</option>
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
