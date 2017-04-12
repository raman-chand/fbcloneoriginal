"use strict"
import React from 'react';
import EventLinksNav from './EventLinksNav';

export default class EventDetails extends React.Component {
	render(){
		return (
			<div>
				<div className="col-md-3">
					<h3>Apr<br />29</h3>
				</div>
				<div className="col-md-9">
					<div className="row">
						<h2>Cherry Blossom Festival</h2>
					</div>
					<div className="row">
						<p>Public | Hosted by <a href="#">Raman's Events</a></p>
					</div>
				</div>
				<EventLinksNav />
			</div>
		)
	}
}