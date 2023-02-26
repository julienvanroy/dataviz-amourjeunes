import ProgressBar from "react-bootstrap/ProgressBar";

const Score = ({score}) => {
    const nbQuestions = localStorage.getItem('nbQuestions') ? parseInt(localStorage.getItem('nbQuestions')) : 0
    const now = (score / nbQuestions) * 100

    return (
        <div className="score">
            <ProgressBar className={nbQuestions <= 0 ? 'zero' : ''} now={now} label={nbQuestions > 0 ? `${parseInt(now)}%` : null}/>
            <span>score</span>
        </div>
    )
}

export default Score;
