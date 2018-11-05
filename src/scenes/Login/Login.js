/*** Imports ***/

/* Library imports */
import React, { Component } from "react";
import PropTypes from "prop-types";
import BtnSolid from "../../components/Buttons/BtnSolid/BtnSolid";

/* Component imports */

/* Style imports */
import './styles.css';

/*** End Imports ***/

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}
  componentDidMount() {}

  // Server calls

  // helper function

  // listeners
  onGoogleLoginClicked =() =>{
    window.location = "/auth/google"
  }
  // views to be rendered

  //finally render
  render() {
    return (
      <div className="login-page-container">
        Login to WHITE PANDA
        <BtnSolid 
          onClick = {this.onGoogleLoginClicked}
          title = {"Login with GOOGLE"}
          customStyle = {
            {
              height : 'auto',
              width : '200px',
              marginTop: '20px'
            }
          }
        />
      </div>
    );
  }
}

/**
 * all prop types which can be passed to this component
 */
Login.propTypes = {};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
Login.defaultProps = {};

export default Login;
