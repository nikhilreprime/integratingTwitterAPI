/*** Imports ***/

/* Library imports */
import React from "react";
import PropTypes from 'prop-types';

/* Style imports */

/*** End Imports ***/

const StatsView = (props) => {

    // helper function
    // event handlers for static component

    return (
        <section>
          <div> 
              <div>Likes</div>
              <div>{props.likes}</div>
          </div>
          <div> 
              <div>Comments</div>
              <div>{props.comments}</div>
          </div>
          <div> 
              <div>Shares</div>
              <div>{props.shares}</div>
          </div>  
        </section>
    );
};

/**
 * all prop types which can be passed to this component
 */
StatsView.propTypes = {

};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
StatsView.defaultProps ={

};

export default StatsView;