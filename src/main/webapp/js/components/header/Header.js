import React from 'react'
import { Link } from 'react-router';
import classNames from 'classnames';
import { hashHistory } from "react-router";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navCollapsed: true,
            currentLocation:  window.location.href.split('/').pop()
        };

        this.toggleNavCollapse = this.toggleNavCollapse.bind(this);
    }

    componentWillMount(){
       hashHistory.listen(location => {
           this.setState({currentLocation: location.pathname.split('/').pop()});
        });
    }

    toggleNavCollapse() {
        this.setState({navCollapsed: !this.state.navCollapsed});
    }

    render() {
        return (
            <header className="ys-header">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/" href="#" className="navbar-brand" onClick={this.updateLocation}><span className="ys-your">Your</span> Services</Link>
                            <button type="button" className="navbar-toggle collapsed" onClick={this.toggleNavCollapse}>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        <div className={classNames({'collapse': this.state.navCollapsed}, 'navbar-collapse')}>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link to="/sign-up" className={classNames({'active': this.state.currentLocation === 'sign-up'})}>Sign up</Link>
                                </li>
                                <li>
                                    <Link to="/sign-in" className={classNames({'active': this.state.currentLocation === 'sign-in'})}>Sign in</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;


Header.contextTypes = {
    router: React.PropTypes.object.isRequired
};
