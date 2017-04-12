"use strict"
import React from 'react';
import FeedItem from './feeditem';
import StatusUpdateEntry from './StatusUpdateEntry';
import Event from './Event';

export default class Feed extends React.Component {
  render() {
    return (
      <div>
        <StatusUpdateEntry />
        <FeedItem />
        <Event />
      </div>
    )
  }
}