import React from 'react'
import { useParams } from 'react-router-dom';
import all_product from './Assets/all_product';
import Breadcrum from './Breadcrum';
import Product from './Product';
import Productdesc from './Productdesc';
import Relatedprod from './Relatedprod';


const Productinfo = ({addToCart, removeFromCart}) => {
    const { productId } = useParams();
    const product = all_product.find(product => product.id === parseInt(productId));
    return (
        <>
            <Breadcrum name={product.name} category={product.category}/>
            <Product addToCart={addToCart} prod={product} />
            <Productdesc/>
            <Relatedprod/>
        </>
    )
}

export default Productinfo
