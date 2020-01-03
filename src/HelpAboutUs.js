import React,{Component} from 'react';
import './helpAboutUs-styles.scss';

class HelpAboutUs extends Component{
    render(){
       
        var aboutUsStructure = [];
        var roundPicArr = ["./../icons/roundicon1.png","./../icons/roundicon2.png","./../icons/roundicon3.png","./../icons/roundicon4.png","./../icons/roundicon5.png"];
        var roundPicArrLen = roundPicArr.length,i;
        for(i=0;i<roundPicArrLen;i++){
            var leftClass = (i%2===0)?("move-left"):("move-right");
            aboutUsStructure.push(
                <div className="div--icon--round" key={i}>
               <div className={"details "+leftClass}>
               <p className="title">JULY 2010</p>
                <p className="subtitle">Our humble Beginnings</p>
                <p className="details-inside">
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt proin iaculis
                </p>
               </div>
                <div className={"icon--round icon--round"+(i+1)}>
                </div>
                </div>
                
            );
        }
        return(
            <div className="help-aboutus-wrapper">
                {aboutUsStructure}
            </div>
        );
    }
}

export default HelpAboutUs;