import React from 'react';
import classnames from 'classnames';

import  '../greeting.scss'

const TextFieldGroup = ({ name, value, label, type, error, onChange }) => {
    return (
        <div className={classnames('form-group', { 'has-error': error })}>
            <label className="control-label" htmlFor={name}>{label}</label>
            <input
                onChange={onChange}
                value={value}
                type={type}
                name={name}
                className="form-control"
            />
            {error && <span className="help-block">{error}</span>}
        </div>  );
};

TextFieldGroup.propTypes = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired
};

TextFieldGroup.defaultProps = {
    type: 'text'
};

export default TextFieldGroup;
