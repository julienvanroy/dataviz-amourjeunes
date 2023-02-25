import React, {Component} from 'react';
import ProgressBar from "react-bootstrap/ProgressBar";

export default class OnlyDesktop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nbQuestions: localStorage.getItem('nbQuestions') ? parseInt(localStorage.getItem('nbQuestions')) : 0,
            score: this.props.score
        };
    }

    score = () => {
        return (this.state.score / this.state.nbQuestions) * 100
    }

    render() {
        if (this.state.nbQuestions <= 0) {
            return (
                <div className="score">
                    <ProgressBar className="zero" now={this.score()}/>
                    <span>score</span>
                </div>
            )
        } else return (
            <div className="score">
                <ProgressBar now={this.score()}
                             label={parseInt(this.score()) +"%"}/>
                <span>score</span>
            </div>
        )


    }
}
