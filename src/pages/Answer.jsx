import {Link, useParams} from "react-router-dom";
import Score from "../components/Score.jsx";
import CountUp from 'react-countup';
import Answer1 from "../components/Answer1.jsx";
import Answer2 from "../components/Answer2.jsx";
import Answer3 from "../components/Answer3.jsx";
import Answer4 from "../components/Answer4.jsx";
import Answer5 from "../components/Answer5.jsx";
import Answer6 from "../components/Answer6.jsx";
import VisibilitySensor from "react-visibility-sensor";
import data from "../data.json";
import {useEffect, useState} from "react";
import Home from "./Home.jsx";


const Answer = () => {
    const {idUrl} = useParams();
    const index = idUrl - 1;
    const question = data.questions[index]?.question
    const answer = data.questions[index]?.answer
    const score = (localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0)
    const nbQuestions = localStorage.getItem('nbQuestions') ? parseInt(localStorage.getItem('nbQuestions')) : 0

    const [scroll, setScroll] = useState(false)

    const handleScroll = () => {
        setScroll(document.documentElement.scrollTop > 0)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const renderAnswerId = () => {
        if (parseInt(idUrl) === 1) {
            return (
                <Answer1/>
            );
        }
        if (parseInt(idUrl) === 2) {
            return (
                <Answer2/>
            );
        }
        if (parseInt(idUrl) === 3) {
            return (
                <Answer3/>
            );
        }
        if (parseInt(idUrl) === 4) {
            return (
                <Answer4/>
            );
        }
        if (parseInt(idUrl) === 5) {
            return (
                <Answer5/>
            );
        }
        if (parseInt(idUrl) === 6) {
            return (
                <Answer6/>
            );
        }
    };

    const renderAnswer4 = () => {
        if (parseInt(idUrl) === 4) {
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

        return question && answer ? (
            <div className={"answer answer__" + idUrl}>
                <div className="answer__content">
                    <h1 dangerouslySetInnerHTML={{__html: question}}/>
                    <div className="response">
                        <img className="response__img"
                                            src={answer.img || ""}
                                            alt="response"/>
                        <h2 className="response__text"><CountUp start={0}
                                                                end={parseFloat(answer.percentage)}
                                                                duration={2.75}
                                                                useEasing={true} decimals={1} decimal=","/> %</h2>
                    </div>
                    {renderAnswer4()}
                    <Score score={score} />
                    <div className={scroll ? "icon-scroll none" : "icon-scroll"}/>
                </div>
                {renderAnswerId()}
                <Link className="btn btn__arrow" to={data.questions[idUrl] ? `../${(parseInt(idUrl) + 1)}/question` : "/scoring"}>
                    <i className="arrow"/>
                </Link>
            </div>
        ) : (<Home/>);
}

export default Answer;


