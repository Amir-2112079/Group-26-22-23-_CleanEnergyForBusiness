import '../CSSContents/Cart.css'
import React from 'react';

function Cart() {
    return (

        <div>Yoo</div>
    );
}

export default Cart;


//backup
/*
import '../CSSContents/Cart.css'
import React from 'react';

function Cart({ cartItems, setCartItems }) {
    const handleRemoveFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            {cartItems.length > 0 && (
                <div>
                    <p>Total: ${totalPrice}</p>
                    <button>Checkout</button>
                </div>
            )}
        </div>
    );
}

export default Cart;

*/


