import React, {PureComponent} from 'react'
import ArticleComments from '../ArticleComments'
import './article-style.css'


class Article extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.isOpen !== nextState.isOpen
    // }

    componentWillMount() {
        // console.log('mounting')
    }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
    //         isOpen: nextProps.defaultOpen
    //     })
    // }

    componentWillUpdate() {
        // console.log('will update')
    }
    render() {
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen && 
            <div className="card-text">
                <section className="article-text">{article.text}</section>
                <ArticleComments article = {article}/>  
            </div>
        return (
            <div className="card mx-auto" style={{width: '70%'}}>
                <div className="card-header">
                    <h2 onClick={this.incrementCounter}>
                        {article.title}
                        clicked {this.state.count}
                        <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
                            {isOpen ? 'close': 'open'} {/* if 'this.state.isOpen' = true => 'close' */}
                        </button>
                    </h2>
                    <h6 className="card-subtitle text-muted">
                        date: {(new Date(article.date)).toDateString()}
                    </h6>
                </div>
                <div className="card-body">
                    {body}
                </div>
            </div> 
        )
    }
    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
}



export default Article