import React, {PureComponent} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'


class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            reverted: false
        }
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>App name</h1>
                    <button className="btn" onClick={this.revert}>Revert</button>
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles} />
            </div>
        )
    }
    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }
}


export default App