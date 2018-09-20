import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutHeader from './AboutHeader';
import Footer from './Footer';

import InstagramEmbed from 'react-instagram-embed'


class About extends Component {


  render() {
    return (
      <div>
        <div className="container">
          <AboutHeader />
          <div className="content">
            <div className="content__left">
              <p>On september 3rd Lil Pump announced he would go to jail for a few months. Show your support for gods greatest gift to the music industry by buying one of the limited t-shirts. Eskketitt!!!</p>
              <h4>Contact/questions: esketit@freelilpump.store</h4>
            </div>

            <div className="content__right">
              <InstagramEmbed
                url='https://instagr.am/p/BnSBuIfFrZd/'
                maxWidth={320}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => { }}
                onSuccess={() => { }}
                onAfterRender={() => { }}
                onFailure={() => { }}
                className="insta-feed"
              />
            </div>
          </div>
        <Footer/>
        </div>
      </div >
    )
  }

}

export default About;