import React, { useEffect, useState } from "react";
import "./shop.scss";
import axios from "../../api";

const ShopAll = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`products`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  let shopProducts = data?.map((product) => {
    return (
      <div className="shop__product" key={product.id}>
        <div className="shop__img">
          <img src={product.images[0]} alt="" />
        </div>
        <p className="shop__desc">{product.description}</p>
      </div>
    );
  });

  return (
    <div className="shop container">
      <h2 className="shop__title">Shop All Products</h2>
      <div className="shop__products">{shopProducts}</div>
    </div>
  );
};

export default ShopAll;
