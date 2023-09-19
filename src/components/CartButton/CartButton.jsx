import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {
    const { cartItems, isCartVisible, setIsCartVisible } =
        useContext(AppContext);

    const totalQuantity = cartItems.reduce((acc, item) => {
        return item.quantity + acc;
    }, 0);

    return (
        <button
            type="button"
            className="cart__button"
            onClick={() => setIsCartVisible(!isCartVisible)}
        >
            <AiOutlineShoppingCart />
            {cartItems.length > 0 && (
                <span className="cart-status">{totalQuantity}</span>
            )}
        </button>
    );
}

export default CartButton;
