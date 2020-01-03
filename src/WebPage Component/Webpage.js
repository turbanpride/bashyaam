import React, { Component } from 'react';
import './webpage-styles.scss';
import HelpAboutUs from './../HelpAboutUs';
class Webpage extends Component {
    render() {
        var menus = ["HOME", "SERVICES", "PORTFOLIO", "ABOUT", "CONTACT"];
        var menuStructure = [], menuLen = menus.length, i;
        for (i = 0; i < menuLen; i++) {
            menuStructure.push(
                <div key={i} className="items-menu">
                    <span>{menus[i]}</span>
                </div>
            );
        }
        
        return (
            <div className="webpage-wrapper">
                <div className="div--menu-items">
                    <div className="div--title">
                        <div className="div-menus">
                            {menuStructure}
                        </div>
                    </div>
                    <div className="div--welcome">
                        <span>Welcome To Our Studio</span>
                    </div>
                    <div className="div--greeting">
                        <span>IT'S NICE TO MEET YOU</span>
                    </div>
                    <button>TELL ME MORE</button>
                </div>

                <div className="div--services">
                    <div className="services-title">SERVICES</div>
                    <div className="services-subtitle">Proin iaculis purus consequat sem cure.</div>
                    <div className="div--service--icons">
                        <div className="div--icons icon--first--service">
                            <div className="image--first--service"></div>
                            <p className="title">E-Commerce</p>
                            <p className="sub-title">Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt </p>
                        </div>
                        <div className="div--icons icon--second--service">
                            <div className="image--second--service"></div>
                            <p className="title">Responsive Web</p>
                            <p className="sub-title">Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt </p>
                        </div>
                        <div className="div--icons icon--third--service">
                            <div className="image--third--service"></div>
                            <p className="title">Web Security</p>
                            <p className="sub-title">Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt </p>
                        </div>
                    </div>
                </div>

                <div className="div--portfolio">
                    <div className="portfolio-title">OUR PORTFOLIO</div>
                    <div className="portfolio-subtitle">Proin iaculis purus consequat sem cure.</div>
                    <div className="div--portfolio--icons">
                        <div className="div--icons icon--first--portfolio">
                            <div className="image--first--portfolio"></div>
                            <p className="title">Ebony & Ivory</p>
                            <p className="sub-title">Branding</p>
                        </div>
                        <div className="div--icons icon--second--portfolio">
                            <div className="image--second--portfolio"></div>
                            <p className="title">Smart Stationary</p>
                            <p className="sub-title">Print Design</p>
                        </div>
                        <div className="div--icons icon--third--portfolio">
                            <div className="image--third--portfolio"></div>
                            <p className="title">Clever Poster</p>
                            <p className="sub-title">Print Design</p>
                        </div>
                    </div>
                </div>

                <div className="div--portfolio row--portfolio2">
                    <div className="div--portfolio--icons">
                        <div className="div--icons icon--first--portfolio">
                            <div className="image--forth--portfolio"></div>
                            <p className="title">Ebony & Ivory</p>
                            <p className="sub-title">Branding</p>
                        </div>
                        <div className="div--icons icon--second--portfolio">
                            <div className="image--fifth--portfolio"></div>
                            <p className="title">Smart Stationary</p>
                            <p className="sub-title">Print Design</p>
                        </div>
                        <div className="div--icons icon--third--portfolio">
                            <div className="image--sixth--portfolio"></div>
                            <p className="title">Clever Poster</p>
                            <p className="sub-title">Print Design</p>
                        </div>
                    </div>
                </div>

                <div className="div--about--us">
                    <div className="aboutUs-title">ABOUT US</div>
                    <div className="aboutUs-subtitle">Proin iaculis purus consequat sem cure.</div>
                    {/* <div>
                    <HelpAboutUs/>
                    </div> */}
                    <HelpAboutUs/>                                  
                </div>

                <div className="div--ourTeam">
                    <div className="ourTeam-title">OUR AMAZING TEAM</div>
                    <div className="ourTeam-subtitle">Proin iaculis purus consequat sem cure.</div>
                    <div className="div--ourTeam--icons">
                        <div className="div--icons icon--first--ourTeam">
                            <div className="image--first--ourTeam"></div>
                            <p className="title">Kimberly Thompson</p>
                            <p className="sub-title">Marketer</p>
                            <div className="social-media-icon"></div>
                        </div>
                        <div className="div--icons icon--second--ourTeam">
                            <div className="image--second--ourTeam"></div>
                            <p className="title">Rico Massimo</p>
                            <p className="sub-title">Coder</p>
                            <div className="social-media-icon"></div>
                        </div>
                        <div className="div--icons icon--third--ourTeam">
                            <div className="image--third--ourTeam"></div>
                            <p className="title">Uku Mason</p>
                            <p className="sub-title">Graphic Designer</p>
                            <div className="social-media-icon"></div>
                        </div>
                    </div>
                    <div className="div--quote">
                    <div>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt proin iaculis.
                    </div>
                    </div>
                </div>
                <div className="div--sponsored-partners">
                <div>  
                </div>
                </div>
            </div>
        );
    }
}
export default Webpage;