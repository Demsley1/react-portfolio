import React from 'react';

const About = () => {
    return (
        <div className="backdrop d-flex flex-column justify-content-center align-items-center">
            <h2 className="my-3 text-center text-white">Denva Emsley</h2>

            <div className="selfie border border-3 border-warning rounded-circle">
                <p className='text-center'>Picture Goes Here</p>
                <img src="" />
            </div>

            <p className="about-text container">
                <span className="bio-title">Bio:</span><br></br>
                    Here you will find an amazing portfolio created using the react-app generator by me, a junior full-stack web developer. This app as well as the few others I have linked in the portfolio are only examples
                of the work I have been doing over the last six months as I steadliy learn and gain more knowledge in creating responsive webpages and apps. From designing elaborate elements to create a pleasing and 
                easy to navigate UI for user's ot interact with, to lengthy coding of back-end servers for the support of interactive websites, I can say that I have experienced a good deal. When I started 
                learning from the bootcamp I have joined I had little to no knowledge of the technological aspect of coding and web design. Thankfully will the help of the instructional staff, 
                and a good deal of stress and hard-work on my part I can now call myself a MERN fullstack web-developer. My wish is for many to view this portfolio, to admire my hard work, 
                and maybe even get inspired to try web-devolpment themseleves, or they can just hire someone like me to make it happen for them.
            </p>
        </div>
    );
};

export default About;