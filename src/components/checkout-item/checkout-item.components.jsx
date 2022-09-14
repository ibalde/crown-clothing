import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({cartItem})=> {

    const {addItemsToCart, removeItemFromCart, decreaseItemCount} = useContext(CartContext);
    const {name, imageUrl, price, quantity} = cartItem;

    const clearCartItemHandler = () => removeItemFromCart(cartItem);
    const decreaseItemCountHandler = () => decreaseItemCount(cartItem);
    const increaseItemCountHandler = () => addItemsToCart(cartItem);
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'> 
                <div className='arrow' onClick={decreaseItemCountHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={increaseItemCountHandler}>&#10095;</div>
            </span>
            <span className='price'> {price} </span>
            <div className='remove-button' onClick={clearCartItemHandler}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;