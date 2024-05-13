import axios from "../../api";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

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
  let singleItem = (
    <div>
      <img src={singleProduct.thumbnail} alt="" />
      <h3>{singleProduct.title}</h3>
      <p>{singleProduct.description}</p>
    </div>
  );
  return <div>{singleItem}</div>;
};

export default singleItem;
