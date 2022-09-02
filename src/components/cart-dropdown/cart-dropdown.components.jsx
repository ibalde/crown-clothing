import './cart-dropdown.styles.scss';
import Button from '../button/button.components';
import CartItem from '../cart-item/cart-item.components';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartDropdown = () => {
    var {cartItems} = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)};
            </div>
            <Button>Go to checkout</Button>
        </div>
    );
}

export default CartDropdown;