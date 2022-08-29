import { useState, createContext, useEffect } from "react";
import SHOP_DATA from '../shop-data.json';

export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({children}) => {
    const [products] = useState(SHOP_DATA);
    const value = {products};

    useEffect(()=>{

    }, []);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>

}