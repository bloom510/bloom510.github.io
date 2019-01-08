import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <h2>About</h2>
                <p> I'm a conservatory-trained musician who collided with the world of software 
                    engineering and DSP via computational musicology. 
                    In my work I combine a working knowledge of full-stack web development with my expertise in music theory,
                    embarking upon explorations in audio programming for the web, new musical interfaces, and 
                    algorithm art, both aural and visual. You can view my open-source repositories on my GitHub and 
                    read my articles in Hacker Noon.
                </p>
                <p>
                    I hold a Professional Certificate in Full Stack Web Development from UC Berkeley Extension,
                    and am currently enrolled as an AS-T candidate in Mathematics at Berkeley City College.  
                    It is my goal over the next couple of years to transfer into an undergraduate CS program.
                    I am currently open to part-time remote or in-person work and internships. 
                </p>
                <p>
                    Feel free <a href='#' onClick={this.props.flipCard}>contact me</a> with inquiries or just to say hello!
                </p>
            </div>
        )
    }
}
