import React, { Component } from 'react';

class CartItem extends Component {
    constructor() {
        super();
        this.state = {
            price: '9,999',
            title: 'Mobile Phone',
            qty: 2
        }
    }
    increaseQuantity = () => {
        this.setState((prevState) =>{
            return{
                qty: prevState.qty + 1
            }
        });
    }
    decreaseQuantity = () => {
        this.setState((prevState) => {
            if(prevState.qty > 1){
                return{
                    qty: prevState.qty - 1
                }
            }
        });
    }
    render() {
        const {price, title, qty} = this.state;
        return (
            <div className="card mb-3" style={{maxWidth: 540}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="card-img" style={styles.image}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{title}</h3>
                            <div className="card-text">Rs {price}</div>
                            <div className="card-text"   
                            style={{ marginBottom: 15 }}>Qty: {qty}</div>
                            <div>
                                {/* {Button} */}
                                <img alt="increase" style={styles.icon} src="https://image.flaticon.com/icons/svg/1828/1828926.svg" 
                                onClick={this.increaseQuantity}/>
                                <img alt="decrease" style={styles.icon}src="https://image.flaticon.com/icons/svg/1828/1828906.svg"
                                onClick={this.decreaseQuantity} />
                                <img alt="delete" style={styles.icon} 
                                src="https://image.flaticon.com/icons/svg/1828/1828843.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 185,
        width: 170,
        borderRadius: 4,
        backgroundColor: '#708090'
    },
    icon:{
        height: 25,
        width: 25,
        marginRight: 10
    }
}

export default CartItem;