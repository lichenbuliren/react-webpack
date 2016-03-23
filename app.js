import React from 'react';
import ReactDom from 'react-dom';
import CommentBox from './modules/CommentBox/CommentBox';

var data = [{
    id: 1,
    author: "Pete Hunt",
    text: "This is one comment"
},{
    id: 2,
    author: "Jordan Walke",
    text: "This is **anthor** comment"
}];
ReactDom.render(
    <CommentBox data={data}/>,
    document.getElementById('content')
);