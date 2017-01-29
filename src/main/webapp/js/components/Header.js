import React from 'react'
import { Link } from 'react-router';
import NavigationBar from './NavigationBar'


class Header extends React.Component {
    render() {
        return (
            <header className="ys-header">
                <NavigationBar />
            </header>
        )
    }
}

export default Header;
