import React from 'react';

import Header from './header/Header';
import Footer from './Footer';

const App = (props) => {
    return (
        <div className="ys-wrapper">
            <Header />
            <div id="ys-main">
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default App;
