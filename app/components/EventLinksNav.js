"use strict"
import React from 'react';

export default class EventLinksNav extends React.Component {
	render() {
		return (
			<div className="col-md-9 col-md-offset-3">
				<button className="btn btn-default"><span className="glyphicon glyphicon-star"></span>Interested</button>
				<button className="btn btn-default"><span className="glyphicon glyphicon-ok"></span>Going</button>
				<button className="btn btn-default"><span className="glyphicon glyphicon-share"></span>Share</button>
			</div>
		)
	}
}