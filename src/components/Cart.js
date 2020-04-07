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
  handleIncreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty > 1){
      products[index].qty -= 1;
      this.setState({
        products
      })
    }
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id != id);
    this.setState({
      products: items
    })
  }
  render() {
    const {products} = this.state;
    return (
      <div>
        {products.map((product) => {
          return (
          <CartItem 
          product={product} 
          key={product.id}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct ={this.handleDeleteProduct}/>
          )
        })}
      </div>
    )
  }
}


export default Cart;
