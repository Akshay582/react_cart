import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [
          {
            price: 9999,
            title: 'Coffee Grinder',
            qty: 1,
            img:'https://images.unsplash.com/photo-1581446899749-8ec24b561e78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            id: 1
          },
          {
            price: 11999,
            title: 'HP Spectre',
            qty: 1,
            img:'https://images.unsplash.com/photo-1579121477063-4026649ad6d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            id: 2
          },
          {
            price: 999,
            title: 'Macbook Pro',
            qty: 1,
            img:'https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
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
  getCartCount = () => {
    const {products} = this.state;
    
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    })
    return cartTotal;
  }
  render () {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar 
        count={this.getCartCount()}/>
        <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct ={this.handleDeleteProduct}
        />
        <div style={{padding: 10, fontSize: 20}}> Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;