"use strict"
import React from 'react';
import EventDetails from './EventDetails';
import EventLinksNav from './EventLinksNav';
import EventThumbnail from './EventThumbnail';

export default class Event extends React.Component {
	render() {
		return (
			<div>
				<EventThumbnail />
				<EventDetails />
				<EventLinksNav />
			</div>
		)
	}
}