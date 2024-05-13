import React from "react";

const SearchResult = ({ data }) => {
  //   console.log("data>>>>", data);
  let searchItems = data?.map((el) => (
    <div key={el.id}>
      <img width={40} src={el.images[0]} alt="" />
      <span>{el.title}</span>
    </div>
  ));
  return (
    <div className="header__search-result">
      {data && data.length === 0 ? (
        <h3>Malumot topilmadi</h3>
      ) : (
        <>{searchItems}</>
      )}
    </div>
  );
};

export default SearchResult;
