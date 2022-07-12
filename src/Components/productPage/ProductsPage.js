import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
// import { db } from "../firebase";
import SubNavBar from "../SubNavBar";
import { getDocs, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import StaticData from "../StaticData";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import './Style.css'
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
{/* <SubNavBar /> */}
       <StaticData />
       <p className="category-label">Category Filter:</p>
       <div className="selected">
      <select onChange={(e) => setSelected(e.target.value)} value={selected} className="selected-input" >
        <option value="clothes">clothes</option>
        <option value="bag">bag</option>
        <option value="shoe">shoe</option>
      </select>
      </div>
      <div  className="filter-product">
      {productsList.map((product) => {
        return (
          <div>
            <div key={product.id} className="product">
              <img src={product.productImg} />
              <div className="pro">
                <p className="pro-name">{product.prorductName}</p>

                <p className="pro-price">Price: {product.price}$</p>
                <br />
                {/* <span>Category: {product.category}</span> */}
                <br />
              </div>
              <button onClick={() => addCart(product.id)}>Show Details</button>
            </div>
          </div>
        );
      })}
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;
