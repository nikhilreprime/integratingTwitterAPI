
/*** Imports ***/

/* Library imports */
import React from "react";
import PropTypes from 'prop-types';

/* Style imports */
import "./styles.css"

/*** End Imports ***/

const BtnOutline = (props) => {

    const onClick = (e) => {
        e.preventDefault();
        e.target.blur();
        props.onClick();
    };

    return (
        <button
            className="btn-outline-gen"
            onClick={onClick}
            style={props.customStyle}
            disabled={props.isDisabled}
            tabIndex={props.tabIndex}
        >
            {props.icon}
            {props.title}
        </button>
    );
};

BtnOutline.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    customStyle : PropTypes.object,
    isDisabled: PropTypes.bool
};
BtnOutline.defaultProps ={
    customStyle : {
        width : '100%'
    }
};
export default BtnOutline;