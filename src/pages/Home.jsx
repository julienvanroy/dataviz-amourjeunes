import {useEffect} from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    useEffect(() => {
        localStorage.clear();
        localStorage.setItem('nbQuestions', '0');
    }, [])

    return (
        <div className="home">
            <h1>Les jeunes et l'amour ...</h1>
            <img className="home__img" src="/assets/accueil-coeur-20.svg" alt="Homepage"/>
            <div className="home__content">
                Données récoltées sur 42 jeunes <br/>
                d'environ 21 ans, en bachelor <br/>
                designer et développeur interactifs
            </div>
            <Link to="/1/question" className="btn btn__arrow"><i className="arrow"/></Link>
        </div>
    );
}

export default Home;
