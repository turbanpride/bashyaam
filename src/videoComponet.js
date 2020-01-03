import React, { Component } from 'react';
import { PrismCode } from 'react-prism';
import { Player, ControlBar } from 'video-react';
import { Button } from 'reactstrap';
import video1 from './videos/Baashyaam Constructions - Plutus Residence Walk-th(1080P_HD).mp4';
import {Modal} from 'react-bootstrap';
import Webpage from './WebPage Component/Webpage';



export default class PlayerControlExample extends Component {
    constructor(props, context) {
        super(props, context);
        this.showModal = this.showModal.bind(this);
        this.timeout = this.timeout.bind(this);
        this.state = {
            showModal:false,
            source: video1,
            "isFullscreen": true,
            timer:60,
            showRemainingVideo:false,
            forceClose:false
        };

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.getDetail = this.getDetail.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.videoPlayer = React.createRef()
    }
    componentDidMount(){
        // this.timeout();
      }
      timeout(){
        window.setTimeout(this.getDetail,1000);
      }
      showModal(){
        this.setState({
          showModal:true,
          showRemainingVideo:true
        });
      }
      closeModal(){
        this.setState({
          showModal:false,
          showRemainingVideo:true,
          forceClose:true
        });
      }
    play() {
        this.player.play();
    }
    pause() {
        // console.log(this.player);
        this.player.pause();
    }
    getDetail(){
        if(this.player.video.video.currentTime > this.state.timer && !this.state.showModal && !this.state.showRemainingVideo){
            return true;
        }
       else if(this.player.video.video.currentTime > this.state.timer && !this.state.showModal && this.state.showRemainingVideo){
            return false;
       }
        else
        {
            return false;
        }
        // console.log(this.player.video.video.currentTime);
    }
    render() {
        var that = this;
        var timerVar,modalTimer,modalSecondCount = 0;
        if(!this.state.showModal &&  !this.state.forceClose){
            timerVar = window.setInterval(timer,1000);
        }
        if(this.state.showModal && !this.state.forceClose){
            modalTimer = window.setInterval(modalTimerFunction,1000);
        }
        if(!this.state.showModal && this.state.forceClose){
            window.clearInterval(modalTimer);
            that.play();
        }
        function timer(){
            var timeVal = that.getDetail();
            if(timeVal){
                window.clearInterval(timerVar);
                that.pause();
                that.showModal();
            }
            
        }
        function modalTimerFunction(){
            modalSecondCount+=1;
            console.log(modalSecondCount);
            if(modalSecondCount>that.state.timer){
                window.clearInterval(modalTimer);
                that.play();
                that.showModal();
            }
        }
        // console.log(this,this.player);
        return (
            <div>
        <Modal className="modal" show={this.state.showModal}>
          <Modal.Body>
            <Webpage/>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.closeModal}>
              CLOSE
            </button>
          </Modal.Footer>
        </Modal>
                <Player
                    ref={player => {
                        this.player = player;
                    }}
                    // ref={this.videoPlayer}
                    // autoPlay
                >
                    <source src={this.state.source} />
                    <ControlBar autoHide={true} isFullscreen={true} autoPlay={true}/>
                </Player>

            </div>
        );
    }
}