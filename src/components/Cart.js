import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [
          {
            price: '9,999',
            title: 'Grinder',
            qty: 1,
            id: 1
          },
          {
            price: '11,999',
            title: 'HP Spectre',
            qty: 1,
            id: 2
          },
          {
            price: '999',
            title: 'Macbook Pro',
            qty: 1,
            id: 3
          }
          ]
    }
}
  render() {
    const {products} = this.state;
    return (
      <div>
        {products.map((product) => {
          return (
          <CartItem 
          product={product} 
          key={product.id}/>
          )
        })}
      </div>
    )
  }
}


export default Cart;
