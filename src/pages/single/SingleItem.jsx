import axios from "../../api";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./single.scss";

const singleItem = () => {
  // const { pathname } = useLocation();
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setSingleProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log("single>>>", singData);
  if (!singleProduct) return <h2>Loading...</h2>;
  let singleItem = (
    <div className="single__card">
      <div className="single__img">
        <img src={singleProduct.thumbnail} alt="" />
      </div>
      <div className="single__info">
        <h3>{singleProduct.title}</h3>
        <h3>{singleProduct.category}</h3>
        <p>{singleProduct.brand}</p>
        <p>{singleProduct.description}</p>
      </div>
    </div>
  );
  return <div className="single container">{singleItem}</div>;
};

export default singleItem;
