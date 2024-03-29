import ProductCard2 from "../ProductCard2/ProductCard2.js";
import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard2 key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
