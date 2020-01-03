import React, { Component } from 'react';
import './App.scss';
import Video from './videoComponet';
import Webpage from './WebPage Component/Webpage';
import Footer from './Footer/Footer';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal:true
    }
  }
  render() {
    return (
      <div className="app--wrapper">
        {/* <Video/> */}
        <Webpage/>
        <Footer/>
      </div>
    );
  }
}
export default App;
