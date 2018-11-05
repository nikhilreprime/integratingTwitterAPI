
/*** Imports ***/

/* Library imports */
import React, { Component } from "react";
import PropTypes from 'prop-types';

/* Component imports */
import {xhrGetFeedsList} from './services/Services'
/* Style imports */

/*** End Imports ***/

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }
  componentDidMount() {
    xhrGetFeedsList({}, (data)=>{
      console.log(data.feeds_list)
    },()=>{

    })
  }

  // Server calls

  // helper function

  // listeners

  // views to be rendered



  //finally render
  render() {
    return (
      <div>
        This is Home Page
      </div>
    );
  }

}

/**
 * all prop types which can be passed to this component
 */
Home.propTypes = {

};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
Home.defaultProps = {

};

export default Home;