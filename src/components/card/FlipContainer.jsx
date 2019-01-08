import React, { Component } from 'react';

import Contact from './Contact';
import Main from './Main';
import Flipper from './Flipper';

export default class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            flipped: false,
            windowDims: { width: window.innerWidth, height: window.innerHeight }
        }
        this.handleFlip = this.handleFlip.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.handleResize()
        })

        //TODO: Achieve the following iteratively
        const flipBtnOne = document.querySelectorAll('.flip-btn')[0]
        const flipBtnTwo = document.querySelectorAll('.flip-btn')[1]
        
        flipBtnOne.addEventListener('click', () => {
            this.handleFlip()
        })

        flipBtnTwo.addEventListener('click', () => {
            this.handleFlip()
        })
    }

    handleResize(){
        const update = { 
            width: window.innerWidth, 
            height: window.innerHeight 
        }
        this.setState({ 
            windowDims: update
        })
    }

    handleFlip(){
        const flipper = document.querySelector('.flipper');
        const back = document.querySelector('.back');

        if(!this.state.flipped) {
            flipper.classList.add('flipped');
            back.classList.add('expand');

            this.setState({
                flipped: true, 
            })

        } else {
            
            back.classList.remove('expand');
            
                flipper.classList.remove('flipped');
                this.setState({
                    flipped: false, 
                })
        }
}

renderFlipBtn(text) {
    return( 
        <Flipper>{text}</Flipper>
    )
}

    render() {
        return (
            <div>
                <div className="flip-container">
                <div className="flipper">
                    <Contact flipBtn={this.renderFlipBtn} />
                    <Main flipCard={this.handleFlip} windowDims={this.state.windowDims} flipped={this.state.flipped} flipBtn={this.renderFlipBtn} />
                </div>
            </div>
            {/* You can conditionally render components based on card direction */}
            {/* For example: */}
            {/* {this.state.flipped ? this.reveal() : null} */}
        </div>
        );
    }
    
}
