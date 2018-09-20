import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class AboutHeader extends Component {


  render() {
    return (
      <div className="pump__header__about">
        <Link to="/about"><p>About</p></Link>
        <Link to="/"><img src="https://i.imgur.com/n953Ltr.png" /></Link>
      </div>
    )
  }

}

export default AboutHeader;