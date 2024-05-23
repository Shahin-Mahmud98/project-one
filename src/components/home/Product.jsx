import React from 'react';
import SingleProduct from './SingleProduct';

const Product = () => {
    return (
        <div className=''>
            <h1 className='my-8 text-2xl font-bold text-center'>Our Products</h1>
            <div className='m-10 flex gap-2'>
           <SingleProduct/>
           <SingleProduct/>
           <SingleProduct/>
           <SingleProduct/>
        </div>
        </div>
        
    );
};

export default Product;