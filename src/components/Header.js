import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Header extends Component {


  render() {
    return (
      <div className="pump__header">
        <Link to="/about"><p>About</p></Link>
        <img src="https://i.imgur.com/n953Ltr.png" />
        {!this.props.isCartOpen &&
          <div className="cart__container">
            <img src="https://i.imgur.com/71vH9CP.png" />
            <p className="pump__cart" onClick={this.props.openCheckout} >Cart ({this.props.checkoutAmount}) </p>
          </div>
        }
      </div>
    )
  }

}

export default Header;