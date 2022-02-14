import React, { Component } from 'react';
import InstaImg from "./Images/logo.png"
import CameraImg from "./Images/camera.png"

export class HeaderComp extends Component {
    render() {
        return (
            <>
            <div className='mainCont'>
                 <div className='head_container'>
                    <div className='header'><img src={InstaImg} alt="logoImage" /></div>
                    <div className='logoHeading'>InstaClone</div>
                     <div className='camera'><img src={CameraImg} alt="CameraImage" /></div>
                 </div>
             </div> 
            </>
        )
    }
}

export default HeaderComp