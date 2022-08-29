import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';
import ProductCard from '../../components/product-card/product-card.components';
import './shop.styles.scss';

const Shop = ()=>{
    var {products} = useContext(ProductsContext);
    
    return (
        <div className='products-container'>
            {products.map((product)=>{
                return <ProductCard key={product.id} product={product} />
            })}
        </div>
    )
}

export default Shop;
