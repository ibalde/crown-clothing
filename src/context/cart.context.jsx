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

const removeCartItem = (cartItems, productToRemove) =>{
    var newArray = cartItems.filter(item => {
        return item.id !== productToRemove.id;
    })
    return [...newArray];
}

const decreaseItemNumber = (cartItems, productToDecrease)=>{
    const index = cartItems.findIndex(obj => obj.id === productToDecrease.id);
    if(productToDecrease.quantity > 1){
        cartItems[index].quantity -= 1 ;
        return [...cartItems];
    }
    else{
        return removeCartItem(cartItems, productToDecrease);
    }
    
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: ()=>{},
    removeCartItem: ()=>{},
    decreaseItemCount: ()=>{},
    cartTotal: 0
});


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=>{
            return total + cartItem.quantity
        }, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total, cartItem)=>{
            return total + cartItem.quantity * cartItem.price
        }, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemsToCart = (productToAdd)=> {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const decreaseItemCount = (productToDecrease) => {
        setCartItems(decreaseItemNumber(cartItems, productToDecrease));
    }

    const value = {isCartOpen, setIsCartOpen, addItemsToCart, cartItems, cartCount, removeItemFromCart, decreaseItemCount, cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}