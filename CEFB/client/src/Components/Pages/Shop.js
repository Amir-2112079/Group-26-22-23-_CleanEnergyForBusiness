import '../CSSContents/Shop.css'
import React, { useState } from 'react';
import Cart from './Cart';

function Shop() {
    const items = [
        { id: 1, name: 'T-shirt', price: 25, image: 'images/shop/t-shirt.png' },
        { id: 2, name: 'Patch', price: 10, image: 'images/shop/patch.png' },
        { id: 3, name: 'Cap', price: 20, image: 'images/shop/cap.png' },
        { id: 4, name: 'Bandana', price: 15, image: 'images/shop/bandana.png' },
        { id: 5, name: 'Bag', price: 20, image: 'images/shop/bag.png' },
        { id: 6, name: 'Socks', price: 20, image: 'images/shop/socks.png' }
    ];

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <div className="Shop">
            <h1>Shopping Page</h1>
            <div className="item-list">
                {items.map((item) => (
                    <div key={item.id} className="item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <button className="cart-btn" onClick={() => handleAddToCart(item)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </div>
    );
}

export default Shop;


//for chat
/*

modify the following react.js code such that the Cart function content is displayed on the nav bar instead of the same page as the shop. "import Cart from './Cart';

function Shop() {
    const items = [
        { id: 1, name: 'T-shirt', price: 25, image: 'images/shop/t-shirt.png' },
        { id: 2, name: 'Patch', price: 10, image: 'images/shop/patch.png' },
        { id: 3, name: 'Cap', price: 20, image: 'images/shop/cap.png' },
        { id: 4, name: 'Bandana', price: 15, image: 'images/shop/bandana.png' },
        { id: 5, name: 'Bag', price: 20, image: 'images/shop/bag.png' },
        { id: 6, name: 'Socks', price: 20, image: 'images/shop/socks.png' }
    ];

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <div className="Shop">
            <h1>Shopping Page</h1>
            <div className="item-list">
                {items.map((item) => (
                    <div key={item.id} className="item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <button className="cart-btn" onClick={() => handleAddToCart(item)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </div>
    );
}

export default Shop;" "function Cart({ cartItems, setCartItems }) {
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

export default Cart;"
*/





//backup 
/*

import '../CSSContents/Shop.css'
import React, { useState } from 'react';
import Cart from './Cart';

function Shop() {
    const items = [
        { id: 1, name: 'T-shirt', price: 25, image: 'images/shop/t-shirt.png' },
        { id: 2, name: 'Patch', price: 10, image: 'images/shop/patch.png' },
        { id: 3, name: 'Cap', price: 20, image: 'images/shop/cap.png' },
        { id: 4, name: 'Bandana', price: 15, image: 'images/shop/bandana.png' },
        { id: 5, name: 'Bag', price: 20, image: 'images/shop/bag.png' },
        { id: 6, name: 'Socks', price: 20, image: 'images/shop/socks.png' }
    ];

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <div className="Shop">
            <h1>Shopping Page</h1>
            <div className="item-list">
                {items.map((item) => (
                    <div key={item.id} className="item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <button className="cart-btn" onClick={() => handleAddToCart(item)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </div>
    );
}

export default Shop;


*/




