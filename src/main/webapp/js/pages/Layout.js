import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

class Layout extends React.Component {
    render() {
        return (
            <div className="ys">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout;