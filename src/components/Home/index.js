import React from 'react';

const Home = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-space-between">
            <h1>Welcome and Enjoy</h1>

            <div className="border border-2 border-dark m-3">
                <img className="affirmation" alt="daily-quote" src={require('../../assets/images/future-quote.jpg')} />      
            </div>  
            <p>Words to live by.</p>          
        </div>
    );
};

export default Home;