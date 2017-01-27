import React from 'react';
import Title from './header/Title';
import { Link } from 'react-router';


class Header extends React.Component {
    render() {
        return (
            <header className="ys-header">
                {/*TODO: add nav as a separate component */}
                <nav class="navbar navbar-inverse" role="navigation">
                    <div class="container">
                        <Title />
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li>
                                    <Link to="food">Food</Link>
                                </li>
                                <li>
                                    <Link to="cars">Cars</Link>
                                </li>
                                <li>
                                    <Link to="health">Health</Link>
                                </li>
                                <li>
                                    <Link to="swpeople">Star Wars People</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;