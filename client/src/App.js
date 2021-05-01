import React from 'react'
import Layout from './core/Layout';
import './styles/main.scss';

import Posts from './components/Posts/Posts';

const App = () => {
    return (
        <Layout>
            <div className="home">
                <div className="home__options">
                    {/* Filters come here. */}
                </div>
                <div className="home__posts">
                    <div className="home__posts__posts">
                        <Posts />
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default App
