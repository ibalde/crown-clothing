import { Fragment, useContext } from 'react';
import {Outlet} from 'react-router-dom';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.components';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.components';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../context/cart.context';
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen} = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrownLogo className='logo' />
          </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>
              SHOP
            </NavLink>
  
            {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to='/auth'>
                SIGN IN
              </NavLink>
            )}
            <CartIcon />
          </NavLinks>
          {isCartOpen === true && <CartDropdown />} 
          
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  };

export default Navigation;