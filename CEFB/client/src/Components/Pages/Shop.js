import '../CSSContents/Shop.css'
import React, { useState } from 'react';
//import Cart from './Cart';



function Shop() {
    const items = [
        {
            id: 1,
            name: 'Product 1',
            price: 9.99,
            image: 'https://picsum.photos/200/200?random=1',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 19.99,
            image: 'https://picsum.photos/200/200?random=2',
        },
    ];

    return (
        <div className="shopping-page">
            {items.map((item) => (
                <div key={item.id} className="item">
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default Shop;

//<Cart cartItems={cartItems} setCartItems={setCartItems} />
//Displays the items selected




/*


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
          //////////
        </div>
    );
}

export default Shop;


*/