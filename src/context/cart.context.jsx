import { useState, createContext, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) =>{
    const foundItem = cartItems.find((cartItem) => 
        cartItem.id === productToAdd.id
    );
    if(foundItem != null){
        const index = cartItems.findIndex(obj => obj.id === foundItem.id);
        cartItems[index].quantity = foundItem.quantity + 1;
        return [...cartItems];
    }
    else{
        return [...cartItems, {...productToAdd, quantity: 1}];
    }

}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: ()=>{}
});


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=>{
            return total + cartItem.quantity
        }, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemsToCart = (productToAdd)=> {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemsToCart, cartItems, cartCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}