
/*** Imports ***/

/* Library imports */
import React, { Component } from "react";
import PropTypes from 'prop-types';
import CardSimple from "./components/CardTypes/CardSimple/CardSimple";
import CardVideo from "./components/CardTypes/CardVideo/CardVideo";
import CardPhoto from "./components/CardTypes/CardPhoto/CardPhoto";
import StatsView from "./components/StatsView/StatsView";

/* Component imports */

/* Style imports */
import './styles.css'
/*** End Imports ***/

class Card extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }
  componentDidMount() {

  }

  // Server calls

  // helper function

  // listeners

  // views to be rendered
  getFeedEntityView = (feedInfo) => {
    let feedType = feedInfo.feedType;
    let view = null
    if (feedInfo.entities) {
      switch (feedType) {
        case "simple":
          view = <CardSimple />
          break;
        case "video":
          view = <CardVideo />
          break;
        case "image":
          view = <CardPhoto />
          break;
        default:
          break;
      }
    }
    return view;
  }


  //finally render
  render() {
    let { feedInfo } = this.props;
    return (
      <div className="card-container">
        title {feedInfo.title}
        description {feedInfo.description}
        attached_url

        mediaContainer
        {this.getFeedEntityView(feedInfo)}
        stats section
        <StatsView {...feedInfo.stats} />
      </div>
    );
  }

}

/**
 * all prop types which can be passed to this component
 */
Card.propTypes = {
  feedInfo: PropTypes.object
};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
Card.defaultProps = {

};

export default Card;