import React from 'react';

import Quote from './Quote'

const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <Quote />
            </div>
            <div className="home__main">
                <div className="home__main__content">
                    <h2>main content</h2>
                </div>

                <div className="home__main__sidebar">
                    <h2>sidebar here</h2>
                </div>
            </div>
        </div>
    )
}

export default Home