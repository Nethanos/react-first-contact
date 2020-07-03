import React from 'react';
import products from '../model/products'

export default (props) => {

    function getProductsListItem(){
        return products.map(product => <li key={product.id}>{product.id} - {product.nome} - {product.preco} </li>)
    }

       return( <React.Fragment>
            <h2>Products</h2>
            <ul>
                {getProductsListItem()}
            </ul>
        </React.Fragment>);
}
