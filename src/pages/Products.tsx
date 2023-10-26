import { useTitle } from "../hooks/useTitle";

function Products() {
  useTitle("Liste des produits");
  return (
    <div className="products">
      <h1>Products</h1>
    </div>
  );
}

export default Products;
