import "./ProductCard2.css";

const ProductCard2 = ({ product }) => {
  return (
    <div className="product-card2">
      <div></div>
      <img src={product.img} alt={product.name} className="product-image"></img>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard2;
