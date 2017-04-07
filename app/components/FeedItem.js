"user strict"
import React from 'react';
import StatusUpdate from './StatusUpdate';
import CommentThread from './CommentThread';
import Comment from './Comment';

export default class FeedItem extends React.Component {
  render() {
    return (
      <div className="fb-status-update panel panel-default">
        <div className="panel-body">
          <StatusUpdate author="Ramanpreet" postDate="Yesterday at 4:14pm"
                        location="New York, NY">Feeling excited about nothing!
          </StatusUpdate>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <ul className="list-inline">
                <li>
                <a href="#">
                  <span className="glyphicon glyphicon-thumbs-up">
                  </span> Like</a>
                </li>
                <li>
                <a href="#">
                  <span className="glyphicon glyphicon-comment">
                  </span> Comment</a>
                </li>
                <li>
                <a href="#">
                  <span className="glyphicon glyphicon-share-alt">
                  </span> Share</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel-footer">
          <div className="row">
            <div className="col-md-12">
              <a href="#">13 people</a> like this
            </div>
          </div>
          <hr />
          <CommentThread>
            <Comment author="Professor" postDate="20 hrs"> Hope everything is ok!</Comment>
            <Comment author="Parents" postDate="20 hrs"> Sending hugs your way</Comment>
          </CommentThread>
        </div>
      </div>
    )
  }
}