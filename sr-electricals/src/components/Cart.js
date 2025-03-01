import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  // Remove item from cart
  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  // Calculate total price
  const calculateTotal = () => {
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    const discount = totalPrice * 0.2; // 20% discount
    const finalPrice = totalPrice - discount;
    return { totalPrice, discount, finalPrice };
  };

  const { totalPrice, discount, finalPrice } = calculateTotal();

  // Navigate to Checkout with total amount
  const handleBuyNow = () => {
    navigate("/checkout", { state: { totalAmount: finalPrice } });
  };

  return (
    <div className="cart-page flex flex-col lg:flex-row justify-between p-6 bg-gray-100 min-h-screen gap-6">
      {/* Left Section: Cart Items */}
      <div className="cart-items flex-1 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-900 border-b pb-2">
          Your Cart
        </h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty. Start shopping!</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="cart-item-card flex bg-gray-50 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow mb-4 items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-medium text-lg text-white">{item.name}</h3>
                <p className="text-white text-sm">Size: {item.size}</p>
                <p className="text-orange-500 font-bold">Rs.{item.price}</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Right Section: Price Details */}
      <div className="price-details w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">Price Details</h2>
        <div className="space-y-4">
          <div className="flex justify-between text-gray-700">
            <span>Price ({cart.length} items)</span>
            <span>Rs.{totalPrice}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>- Rs.{discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="border-t pt-4 flex justify-between font-bold text-gray-900">
            <span>Total Amount</span>
            <span>Rs.{finalPrice.toFixed(2)}</span>
          </div>
        </div>
        <button
          onClick={handleBuyNow}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md mt-6 transition-transform transform hover:scale-105"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
