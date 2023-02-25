import React, {Component} from 'react';
import {Link, redirect} from "react-router-dom";
import axios from "axios";
import Score from "../components/Score.jsx";
import CountUp from 'react-countup';
import Answer1 from "../components/Answer1.jsx";
import Answer2 from "../components/Answer2.jsx";
import Answer3 from "../components/Answer3.jsx";
import Answer4 from "../components/Answer4.jsx";
import Answer5 from "../components/Answer5.jsx";
import Answer6 from "../components/Answer6.jsx";
import VisibilitySensor from "react-visibility-sensor";


export default class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.questionId,
            question: null,
            answer: null,
            scoring: false,
            score: (localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0),
            scroll: false
        };
    }

    async componentDidMount() {
        window.addEventListener('scroll', this.classScroll, true);
        const questionId = this.props.match.params.questionId;
        const data = (await axios.get('/data.json')).data;
        if (data.questions[questionId - 1] === undefined) {
            return redirect(`/404`);
        } else {
            if (data.questions[questionId] === undefined) {
                this.setState({
                    scoring: true
                })
            }
            let question = data.questions[questionId - 1].question;
            let answer = data.questions[questionId - 1].answer;
            this.setState({
                question,
                answer
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.classScroll);
    }

    nextQuestion() {
        if (this.state.scoring === true) {
            return (
                <Link className="btn btn__arrow" to="/scoring">
                    <i className="arrow"/>
                </Link>
            );
        } else return (
            <Link className="btn btn__arrow" to={"../" + (parseInt(this.state.id) + 1) + "/question"}>
                <i className="arrow"/>
            </Link>
        );
    }

    renderAnswerId = () => {
        if (parseInt(this.state.id) === 1) {
            return (
                <Answer1/>
            );
        }
        if (parseInt(this.state.id) === 2) {
            return (
                <Answer2/>
            );
        }
        if (parseInt(this.state.id) === 3) {
            return (
                <Answer3/>
            );
        }
        if (parseInt(this.state.id) === 4) {
            return (
                <Answer4/>
            );
        }
        if (parseInt(this.state.id) === 5) {
            return (
                <Answer5/>
            );
        }
        if (parseInt(this.state.id) === 6) {
            return (
                <Answer6/>
            );
        }
    };

    renderCount = () => {
        if (parseInt(this.state.id) !== 2) {
            return (<h2 className="response__text"><CountUp start={0}
                                                            end={this.state.answer !== null ? parseFloat(this.state.answer.percentage) : 0}
                                                            duration={2.75}
                                                            useEasing={true} decimals={1} decimal=","/> %</h2>)
        } else {
            return (<h2 className="response__text"><CountUp start={0}
                                                            end={this.state.answer !== null ? parseInt(this.state.answer.percentage) : 0}
                                                            duration={2.75}
                                                            useEasing={true}/> %</h2>)
        }
    };

    renderAnswer4 = () => {
        if (parseInt(this.state.id) === 4) {
            return (
                <div className="detail other">
                    <h2>mais</h2>
                    <div className="cercle cercle__2 flex column reverse">
                        <div>
                            <VisibilitySensor>
                                <div>
                                    <div className="count">
                                        <CountUp start={0}
                                                 end={31}
                                                 duration={2.75}
                                                 useEasing={true} suffix={" %"}/>
                                    </div>
                                </div>
                            </VisibilitySensor>
                        </div>
                        <div>
                            Peut-être
                        </div>
                    </div>
                    <div className="cercle cercle__2 flex column reverse">
                        <div>
                            <VisibilitySensor>
                                <div>
                                    <div className="count">
                                        <CountUp start={0}
                                                 end={21.3}
                                                 duration={2.75}
                                                 useEasing={true} decimals={1} decimal="," suffix={" %"}/>
                                    </div>
                                </div>
                            </VisibilitySensor>
                        </div>
                        <div>
                            Non
                        </div>
                    </div>
                </div>
            )
        }
    };

    classScroll = () => {
        if (document.documentElement.scrollTop > 0 && !this.state.scroll) {
            this.setState({
                scroll: true
            })
        } else if (document.documentElement.scrollTop <= 0 && this.state.scroll) {
            this.setState({
                scroll: false
            })
        }
    };

    render() {
        return (
            <div className={"answer answer__" + this.state.id}>
                <div className="answer__content">
                    <h1 dangerouslySetInnerHTML={{__html: this.state.question}}/>
                    <div className="response">
                        <img className="response__img"
                                            src={this.state.answer !== null ? this.state.answer.img : ""}
                                            alt="response"/>
                        {this.renderCount()}
                    </div>
                    {this.renderAnswer4()}
                    <Score score={this.state.score}/>
                    <div className={this.state.scroll ? "icon-scroll none" : "icon-scroll"}/>
                </div>
                {this.renderAnswerId()}
                {this.nextQuestion()}
            </div>
        );
    }
}


