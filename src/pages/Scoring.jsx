import {Link} from "react-router-dom";

const Scoring = () => {
    const score = (localStorage.getItem('score') ? localStorage.getItem('score') : 0)
    const nbQuestions = localStorage.getItem('nbQuestions') ? parseInt(localStorage.getItem('nbQuestions')) : 0

    const colorCercle = score / nbQuestions >= 0.5 ? "cercle__1" : "cercle__2"

    return (
        <div className="scoring">
            <h1>Peu importe les chiffres <br/> suivez votre cœur !</h1>
            <div className="flex row">
                <img src="/assets/img/1/amour-oui.svg" alt="amour-oui"/>
                <img src="/assets/img/2/fidelite-cadenas-couple.svg" alt="fidelite-cadenas-couple"/>
                <img src="/assets/img/3/reseaux-tel-seul.svg" alt="reseaux-tel-seul"/>
                <div className={`cercle ${colorCercle} flex column reverse`}>
                    <div>{score}/{nbQuestions}</div>
                    <div>score</div>
                </div>
                <img src="/assets/img/4/fidele-oui.svg" alt="fidele-oui"/>
                <img src="/assets/img/5/ovaire.svg" alt="ovaire"/>
                <img src="/assets/img/6/zizi-content.svg" alt="zizi-content"/>
            </div>
            <div className="scoring__credit">
                Réalisé par Julien Vanroy et Elisa Masfrand
            </div>
            <Link to="/" className="btn">Recommencer</Link>
        </div>
    );
}

export default Scoring


