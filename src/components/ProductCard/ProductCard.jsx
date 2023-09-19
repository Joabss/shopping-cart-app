import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';

import './ProductCard.css';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {
    const { cartItems, setCartItems } = useContext(AppContext);
    const { title, thumbnail, price } = data;

    const handleAddCart = () => {
        let existsItem = false;

        const updatedItems = cartItems.map((item) => {
            if (item.id == data.id) {
                existsItem = true;
                return { ...item, quantity: item.quantity++ };
            }
            return item;
        });

        if (!existsItem) {
            data.quantity = 1;
            setCartItems([...updatedItems, data]);
        } else {
            setCartItems([...cartItems]);
        }
    };

    return (
        <section className="product-card">
            <img
                src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
                alt="product"
                className="card__image"
            />

            <div className="card__infos">
                <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
                <h2 className="card__title">{title}</h2>
            </div>

            <button
                type="button"
                className="button__add-cart"
                onClick={handleAddCart}
            >
                <BsFillCartPlusFill />
            </button>
        </section>
    );
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;
