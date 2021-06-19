import React, { useEffect } from "react";

function Products(props) {
  useEffect(() => {
    document.title = props.titleStartBy + "Liste des produits";
  });
  return (
    <div className="products">
      <h1>Products</h1>
    </div>
  );
}

export default Products;
