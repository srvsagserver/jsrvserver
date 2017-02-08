import React from 'react';

import Header from './common/header/Header';
import Footer from './common/Footer';

const App = (props) => {
    return (
        <div className="ys container">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default App;
