import React from 'react';

class Title extends React.Component {
    render() {
        return (
           <h1>{this.props.title}</h1>
        )
    }
}

Title.defaultProps = {
    title: 'Your Services'
};

export default Title;