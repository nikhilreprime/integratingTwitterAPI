
/*** Imports ***/

/* Library imports */
import React from "react";
import PropTypes from 'prop-types';

/* Style imports */
import "./styles.css"

/*** End Imports ***/

const BtnSolid = (props) => {

    const onClick = (e) => {
        e.preventDefault();
        e.target.blur();
        props.onClick();
    };

    return (
        <button
            className="btn-solid"
            style={props.customStyle}
            onClick={onClick}
            disabled={props.isDisabled}
            tabIndex={props.tabIndex}
        >
            {props.icon}
            {props.title}
        </button>
    );
};

BtnSolid.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon : PropTypes.element,
    customStyle : PropTypes.object,
    isDisabled: PropTypes.bool
};
BtnSolid.defaultProps ={
  customStyle : {
      height : '100%',
      width : '100%'
  },
    isDisabled : false
};

export default BtnSolid;