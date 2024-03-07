import React from "react";

function ProductItem({ product, onRemove }) {
  return (
    <div className="product-item">
      <p>
        {product.name} - ${product.price}
      </p>
      <button onClick={() => onRemove(product.id)}>Xoa</button>
    </div>
  );
}

export default ProductItem;
