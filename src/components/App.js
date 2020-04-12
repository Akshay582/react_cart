import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'
import * as firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [],
        loading: true
      }
    this.db = firebase.firestore();
  }

  componentDidMount() {
    this.db
      .collection('products')
      .orderBy('price', 'desc')
      .onSnapshot(snapshot => {
        snapshot.docs.map(doc => {
          console.log(doc.data());
        });
        const products = snapshot.docs.map(doc => {
          const data = doc.data();

          data['id'] = doc.id;
          return data;
        })
        this.setState({
          products,
          loading: false
        })
      })
    }

  handleIncreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //   products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log('Product Updated.');
      })
      .catch((error) => {
        console.log('Error: ', error);
      })
  }
  handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    // if(products[index].qty > 1){
    //   products[index].qty -= 1;
    //   this.setState({
    //     products
    //   })
    // }
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(() => {
        console.log('Product Updated.');
      })
      .catch((error) => {
        console.log('Error: ', error);
      })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    // const items = products.filter((item) => item.id != id);
    // this.setState({
    //   products: items
    // })
    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(() => {
        console.log('Product Deleted Successfully.')
      })
      .catch(error => {
        console.log('Error:', error);
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
  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: '',
        price: 900,
        qty: 3,
        title: 'Washing Machine'
      })
      .then((docRef) => {
        console.log('Product has been added:', docRef);
      })
      .catch(err => {
        console.log('Error', err);
      })
  }
  render () {
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar 
        count={this.getCartCount()}/>
        {/* <button 
        onClick={this.addProduct}
        style={{margin: 10}}
        className="btn btn-primary btn-lg">Add Product</button> */}
        <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct ={this.handleDeleteProduct}
        />
        {loading && <h3>Loading Products...</h3>}
        <div style={{padding: 10, fontSize: 20}}> Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;