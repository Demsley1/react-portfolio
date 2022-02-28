import React from 'react';

const Home = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-space-between">
            <h1>Welcome and Enjoy</h1>

            <div className="border border-3 border-dark my-5">
                <img className="affiramtion" alt="daily-quote" src="/images/future-quote.jpg" />      
            </div>  
            <p>Words to live by.</p>          
        </div>
    );
};

export default Home;