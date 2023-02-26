import {Link, useParams} from "react-router-dom";
import Score from "../components/Score.jsx";
import data from '../data.json'
import Home from "./Home.jsx";

const Question = () => {
    const {idUrl} = useParams();
    const index = idUrl - 1;
    const question = data.questions[index]?.question
    const answers = data.questions[index]?.answers
    const score = (localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0)

    const handleAnswer = (value) => {
        const myAnswer = answers.filter((answer) => answer.answer === value);
        localStorage.setItem('score', myAnswer[0].right === true ? score + 1 : score);
        localStorage.setItem('nbQuestions', idUrl);
    }

        return question && answers ? (
            <div className={`question question__${idUrl}`}>
                <h1 dangerouslySetInnerHTML={{__html: question}} />
                <div className="flex answers">
                    {answers.map((answer, index) => <Link to={`/${idUrl}/answer`} key={index} onClick={ () => handleAnswer(answer.answer) }><img
                        src={answer.img} alt="answer"/></Link>)}
                </div>
                <Score score={score}/>
            </div>
        ) : (<Home />);
}

export default Question;


