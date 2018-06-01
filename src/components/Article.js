import React, {Component} from 'react'


class Article extends Component {
    // constructior(props) {
    //     super(props)
    //     this.state = {
    //         isOpen: true
    //     }
    // }
    state = {
        isOpen: true
    }
    render() {
        const {article} = this.props
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div className="hello">
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close': 'open'} {/* if 'this.state.isOpen' = true => 'close' */}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div> 
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }) 
    }
}



export default Article