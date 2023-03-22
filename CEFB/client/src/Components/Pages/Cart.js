import '../CSSContents/Cart.css'
import React from 'react';


function Cart(props) {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = props;
    return (
        <div className='Cart'>
            <h1 className='cart-title'>Cart Page</h1>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img className='cart-image' style={{ width: "100px", height: "100px" }} src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>£{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button className='cart---button' onClick={() => increaseQuantity(item)}>+</button>
                        <button className='cart---button' onClick={() => decreaseQuantity(item)}>-</button>
                        <button className='cart-remove-button' onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Cart;




//orignal code 
/*

const Cart = (props) => {
    const cartItems = props.cartItems;
    const removeFromCart = props.removeFromCart;
    const increaseQuantity = props.increaseQuantity;
    const decreaseQuantity = props.decreaseQuantity;
    return (
        <div className='Cart'>
            <h1 className='cart-title'>Cart Page</h1>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img className='cart-image' style={{ width: "100px", height: "100px" }} src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>£{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button className='cart---button' onClick={() => increaseQuantity(item)}>+</button>
                        <button className='cart---button' onClick={() => decreaseQuantity(item)}>-</button>
                        <button className='cart-remove-button' onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Cart;
*/