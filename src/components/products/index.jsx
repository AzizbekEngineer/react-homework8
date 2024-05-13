import React, { useEffect, useState } from "react";
import "./product.scss";
import axios from "../../api";
import Loading from "../loading/Loading";
import "./product.scss";

const Product = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(1);

  const parPageCount = 4;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`products`, {
        params: {
          limit: offset * parPageCount,
        },
      })
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [offset]);

  const productItem = data?.map((product) => {
    return (
      <div class="product__card" key={product.id}>
        <div class="product__img">
          <img src={product.images[0]} alt="" />
        </div>
        <div class="product__info">
          <h3 class="product__desc">{product.title}</h3>
          <h3 class="product__desc">{product.brand}</h3>
          <h3 class="product__desc">{product.category}</h3>
          <p class="product__desc">{product.description}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="product container">
      <div className="product__cards">{productItem}</div>
      {loading ? <Loading /> : <></>}
      <button className="product__btn" onClick={() => setOffset((p) => p + 1)}>
        See More
      </button>
    </section>
  );
};

export default Product;
