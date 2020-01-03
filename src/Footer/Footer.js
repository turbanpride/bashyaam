
import React, { Component } from 'react';
import './footer-styles.scss';
class Footer extends Component {
    render() {

        return (
            <div className="footer-wrapper">
            <div className="footer-map-background">
            <div className="title">
                    CONTACT US
               </div>
                <div className="subtitle">
                    Prolin iaculis purus consequat sem cure.
               </div>
                <div className="div--input-type grid-container">
                    <div className="item1"></div>
                    <div className="item2">
                        <div className="input-type-details">
                            <input type="text" placeholder="YOUR NAME*"></input>
                            <input type="text" placeholder="YOUR E-MAIL*"></input>
                            <input type="text" placeholder="SUBJECT*"></input>
                        </div>
                        <div className="input-type-message">
                            <input type="text" placeholder="YOUR MESSAGE*"></input>
                        </div>
                    </div>
                    <div className="item3"></div>

                </div>
                <button>SEND MESSAGE</button>
            </div>
               <div className="footer-social-networking">
                <span> Copyright 2014 FreebiesXpress.com</span>
                <div></div>
               </div>
            </div>
        );
    }
}
export default Footer;