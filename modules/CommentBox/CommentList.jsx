import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CommentList';
    }
    render() {
        let commentNodes = this.props.data.map(comment => {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}

export default CommentList;
