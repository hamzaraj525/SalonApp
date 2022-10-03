import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import './Product.css'
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import { Link, useParams } from "react-router-dom";
import Proceed from "../Proceed/Proceed";
const ProductDetail = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { id } = useParams();
  const [loadData, setLoadData] = useState(false);
  const [isLoad, setIsLoad] = useState(true);

  //  product.productData.find(Data => Data._id === productId)
  const [product, setProducts] = useState([]);
  const [thisProduct, setthisProduct] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((res) => setProducts(res.data.productData))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filter = product && product.find((s) => s._id == id);
    console.log("llll.>", filter,product);
    setthisProduct(filter)
  }, [product]);

  return (
    <> <div className="rapper">
    <div className="uter">
      <div className="cntent animated fadeInLeft">
        <span className="bog animated fadeInDown">EXCLUSIVE</span>
        <h1 className="head1">{thisProduct?.name}<br/> For Your beauty </h1>
        <p className="pa">{thisProduct?.description}</p>
        
        <div className="buton">
          <Link to="#">Price:Rs{thisProduct?.price}</Link><Link className="cart-btn az" to="proceed"><i className="cart-icon ion-bag"></i>Proceed to Checkout</Link>
        </div>
        
      </div>
      <img src={thisProduct?.imageUrl} alt="aa" width="300px" className="im animated fadeInRight"/>
    </div>
    <p className="footer pa">Based on FastLanSalon  - Products Market</p>
  </div>
   <Proceed/>
    </>
  );
};



export { ProductDetail };

