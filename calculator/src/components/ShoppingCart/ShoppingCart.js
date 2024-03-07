import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    // Thêm các sản phẩm khác nếu cần
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    updateTotalPrice();
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    updateTotalPrice();
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    updateTotalPrice();
  };

  const updateTotalPrice = () => {
    const total = cartItems.reduce((total, item) => total + item.price, 0);
    setTotalPrice(total);
  };

  return (
    <div className="shopping-cart">
      <h2>Giỏ Hàng</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <ProductItem
            key={item.id}
            product={item}
            onRemove={handleRemoveFromCart}
          />
        ))}
      </div>
      <p>Tổng Giá: ${totalPrice}</p>
    </div>
  );
};

export default ShoppingCart;
