import React, {PureComponent} from 'react'
import Comment from '../Comment'
import './article-comments-style.css'


export default class ArticleComments extends PureComponent {
    state = {
        isOpen: false
    }
    render() {
        if(this.props.article.comments) {
            var comments = this.props.article.comments.map((comment, index) =>
                <li key={comment.id} className="article-list__li">
                    <Comment comment = {comment}/>
                </li>
            )
        } 
        const body = this.state.isOpen && <ul className="comments">{comments}</ul>
        return (
            <div className="card-text">
                <button onClick={this.handleClick} className="btn btn-secondary btn-sm">Comments</button>
                {body}   
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }) 
    }
}

