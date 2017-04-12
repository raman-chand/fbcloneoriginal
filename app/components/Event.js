"use strict"
import React from 'react';
import EventDetails from './EventDetails';
import EventThumbnail from './EventThumbnail';

export default class Event extends React.Component {
	render() {
		return (
			<div className="fb-events">
				<EventThumbnail />
				<EventDetails />
			</div>
		)
	}
}