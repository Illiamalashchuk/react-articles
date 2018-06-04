import React, {Component} from 'react'
import './style.css'

export default class Comment extends Component {
    render() {
        //console.log('commnent', this.props.comment)
        const comment = this.props.comment
        return (
            <div>
                <p>
                    <span style={{color: 'red'}}>
                        {comment.user}
                    </span>
                    <br/>
                    {comment.text}
                </p>
            </div>
        )
    }
}
