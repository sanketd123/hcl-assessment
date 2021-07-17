import React, { Component } from 'react';
import left_panel from '../../../assets/images/left_panel.jpg';
import   './sliderComponent.scss';
interface Props {
    type: string
}

function sliderComponent(){
 
         return (
            <div>
                    <figure className="banner_img">
                            <figure className="logo">
                            Financial Spend Analyzer 
                            </figure>
                            <img src={left_panel}  alt="Left Images"/>
                      
                    </figure>
                </div>
        )   
    
    }
export default sliderComponent;