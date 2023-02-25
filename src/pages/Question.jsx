import React, {Component} from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom";
import ReactImageFallback from "react-image-fallback";
import Score from "../components/Score.jsx";

export default class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            question: null,
            answers: [],
            error: false,
            answered: false,
            score: (localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0)
        };
    }

    renderRedirect = () => {
        if (this.state.error) {
            return <Redirect to="/404"/>
        }else if (this.state.answered) {
            return <Redirect to={"../"+this.state.id+"/answer"}/>
        }
    };

    async componentDidMount() {
        const questionId = this.props.match.params.questionId;
        const data = (await axios.get('/data.json')).data;
        if (data.questions[questionId - 1] === undefined) {
            this.setState({
                error: true
            })
        } else {
            let question = data.questions[questionId - 1].question;
            let answers = data.questions[questionId - 1].answers;
            this.setState({
                id: questionId,
                question,
                answers
            });
        }
    }

    handleAnswer (ev, value) {
        ev.preventDefault()
        let myAnswer = this.state.answers.filter((answer) => answer.answer === value);
        localStorage.setItem('rightAnswer', myAnswer[0].right);
        localStorage.setItem('score', myAnswer[0].right === true ? this.state.score+1 : this.state.score);
        localStorage.setItem('nbQuestions', localStorage.getItem('nbQuestions') ? parseInt(localStorage.getItem('nbQuestions')) + 1 : 0);
        this.setState({
            answered: true
        })
    }

    render() {
        return (
            <div className={"question question__"+this.state.id}>
                {this.renderRedirect()}
                <h1 dangerouslySetInnerHTML={{__html: this.state.question}} />
                <form className="flex answers">
                    {this.state.answers.map((answer, index) => <button key={index} onClick={ ev => this.handleAnswer(ev, answer.answer) }><ReactImageFallback
                        src={answer.img} fallbackImage="/assets/img/stop.svg"/></button>)}
                </form>
                <Score score={this.state.score}/>
            </div>
        );
    }
}


