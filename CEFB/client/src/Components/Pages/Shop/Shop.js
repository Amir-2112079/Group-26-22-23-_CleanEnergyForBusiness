import './Shop.css'
import { useState } from 'react';
import Cart from '../Cart';


function Shop(props) {
    const { addToCart } = props;
    const items = [
        { id: 1, name: 'T-shirt', price: 25, image: 'images/Shop/6.png' },
        { id: 2, name: 'Patch', price: 10, image: 'images/Shop/4.PNG' },
        { id: 3, name: 'Cap', price: 20, image: 'images/Shop/3.png' },
        { id: 4, name: 'Bandana', price: 15, image: 'images/Shop/2.png' },
        { id: 5, name: 'Bag', price: 20, image: 'images/Shop/1.png' },
        { id: 6, name: 'Socks', price: 20, image: 'images/Shop/5.png' }
    ];


    return (
        <div className='Shop'>
            <h1 className='shop-title'>Shopping Page</h1>
            <div className="item-list">
                {items.map((item) => (
                    <div key={item.id} className="item">
                        <img className='shop-image' src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>£{item.price}</p>
                        <button className='shop-button' onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;


//orignal code

/*
import Cart from '../Cart';


function Shop() {

    const items = [
        { id: 1, name: 'T-shirt', price: 25, image: 'images/Shop/6.png' },
        { id: 2, name: 'Patch', price: 10, image: 'images/Shop/4.PNG' },
        { id: 3, name: 'Cap', price: 20, image: 'images/Shop/3.png' },
        { id: 4, name: 'Bandana', price: 15, image: 'images/Shop/2.png' },
        { id: 5, name: 'Bag', price: 20, image: 'images/Shop/1.png' },
        { id: 6, name: 'Socks', price: 20, image: 'images/Shop/5.png' }
    ];

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (index === -1) {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        } else {
            const newCartItems = [...cartItems];
            newCartItems[index].quantity++;
            setCartItems(newCartItems);
        }
    };

    const removeFromCart = (item) => {
        const newCartItems = [...cartItems];
        const index = newCartItems.findIndex((cartItem) => cartItem.id === item.id);
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    const increaseQuantity = (item) => {
        const newCartItems = [...cartItems];
        const index = newCartItems.findIndex((cartItem) => cartItem.id === item.id);
        newCartItems[index].quantity++;
        setCartItems(newCartItems);
    };

    const decreaseQuantity = (item) => {
        const newCartItems = [...cartItems];
        const index = newCartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (newCartItems[index].quantity > 1) {
            newCartItems[index].quantity--;
            setCartItems(newCartItems);
        }
    };

    return (
        <div className='Shop'>
            <h1 className='shop-title'>Shopping Page</h1>
            <div className="item-list">
                {items.map((item) => (
                    <div key={item.id} className="item">
                        <img className='shop-image' src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>£{item.price}</p>
                        <button className='shop-button' onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
            />
        </div>
    );
}

export default Shop;
*/