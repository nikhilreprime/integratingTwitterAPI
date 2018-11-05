
/*** Imports ***/

/* Library imports */
import React from "react";
import PropTypes from 'prop-types';

/* Style imports */
import "./styles.css"

/*** End Imports ***/

const BtnNude = (props) => {

    const onClick = () => {
        props.onClick();
    };

    return (
        <button
            className="btn-nude"
            style={props.customStyle}
            disabled={props.isDisabled}
            onClick={onClick}>
            {props.icon}
            {props.title}
        </button>
    );
};

BtnNude.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    icon : PropTypes.element,
    customStyle : PropTypes.object,
    isDisabled: PropTypes.bool
};

BtnNude.defaultProps ={
    customStyle : {
        height : '100%',
        width : '100%'
    },
    isDisabled : false
};

export default BtnNude;