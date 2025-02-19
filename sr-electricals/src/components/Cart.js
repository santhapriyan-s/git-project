import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart, favourites, setFavourites }) => {
  const navigate = useNavigate();

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const handleBuyNow = () => {
    // Navigate to checkout page with all cart items
    navigate("/checkout", { state: { cart } });
  };

  const calculateTotal = () => {
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    const discount = totalPrice * 0.2; // Assume 20% discount for demo purposes
    const finalPrice = totalPrice - discount;
    return { totalPrice, discount, finalPrice };
  };

  const { totalPrice, discount, finalPrice } = calculateTotal();

  return (
    <div className="flex flex-col lg:flex-row justify-between p-6 bg-gray-100 min-h-screen">
      {/* Left Section: Cart Items */}
      <div className="flex-1 bg-white shadow-lg rounded-md p-4">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty. Start shopping!</p>
        ) : (
          <div className="cart-grid">
          {cart.map((item, index) => (
            <div key={index} className="cart-card">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-size">Size: {item.size}</p>
                <p className="cart-item-price">Rs.{item.price}</p>
              </div>
              <div className="cart-actions">
                <button
                  onClick={() => removeFromCart(index)}
                  className="cart-button cart-remove"
                >
                  Remove
                </button>
                <button className="cart-button cart-save">Save for Later</button>
              </div>
            </div>
          ))}
        </div>
        
        )}
      </div>

      {/* Right Section: Price Details */}
      <div className="bg-white shadow-lg rounded-md p-4 w-full lg:w-1/3 mt-6 lg:mt-0 lg:ml-6">
        <h2 className="text-xl font-bold mb-4">Price Details</h2>
        <div className="space-y-2">
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
          <div className="border-t pt-2 flex justify-between font-bold text-gray-900">
            <span>Total Amount</span>
            <span>Rs.{finalPrice.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-green-600 text-sm mt-2">
          You will save Rs.{discount.toFixed(2)} on this order.
        </p>
        <button
          onClick={handleBuyNow}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-md mt-4"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
