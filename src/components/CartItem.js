import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        return (
            <div className="card mb-3" style={{maxWidth: 540}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="card-img" style={styles.image}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">Phone</h3>
                            <div className="card-text">Rs 999</div>
                            <div className="card-text">Qty: 1</div>
                            <div>
                                {/* {Button} */}
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
        height: 155,
        width: 170,
        borderRadius: 4,
        backgroundColor: '#708090'
    }
}

export default CartItem;