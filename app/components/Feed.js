"use strict"
import React from 'react';
import FeedItem from './feeditem';
import StatusUpdateEntry from './StatusUpdateEntry';

export default class Feed extends React.Component {
  render() {
    return (
      <div>
        <StatusUpdateEntry />
        <FeedItem />
      </div>
    )
  }
}