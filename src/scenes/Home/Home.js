
/*** Imports ***/

/* Library imports */
import React, { Component } from "react";
import PropTypes from 'prop-types';
import ReactList from 'react-list';

/* Component imports */
import { xhrGetFeedsList } from './services/Services'
import Card from "./components/Card/Card";

/* Style imports */
import './styles.css';
/*** End Imports ***/

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedsList: []
    }
    this.start = 0
    this.rowSize = 5
  }

  componentWillMount() {

  }
  componentDidMount() {
    xhrGetFeedsList({
      start: this.start,
      size: this.rowSize
    }, (data) => {
      console.log(data.feeds_list)
      let newList = JSON.parse(JSON.stringify(this.state.feedsList))
      for (let item of data.feeds_list) {
        newList.push(item)
      }
      this.setState({
        feedsList: newList
      })
    }, () => {

    })
  }

  // Server calls

  // helper function
  renderItem = (index, key) => {
    if (this.state.feedsList[index]) {
      return (
        <Card
          key={key}
          feedInfo={this.state.feedsList[index]}
        />
      );
    } else {
      return (
        <div key={key}>
          Loading
        </div>
      );
    }

  }

  // listeners

  // views to be rendered



  //finally render
  render() {
    return (
      <div className="home-page-container">
        This is Home Page
        <div className="react-list-container" style={{ overflow: 'auto', height: 'calc(100vh - 70px)' }}>
          <ReactList
            itemRenderer={this.renderItem}
            length={this.state.feedsList.length}
            type='uniform'
          />
        </div>
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