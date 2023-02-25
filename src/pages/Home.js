import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Home extends Component {
    componentDidMount() {
        localStorage.clear();
        localStorage.setItem('nbQuestions', '0');
    }

    render() {
        return (
            <div className="home">
                <h1>Les jeunes et l'amour ...</h1>
                <img className="home__img" src="/assets/accueil-coeur-20.svg" alt="Homepage" />
                <div className="home__content">
                    Données récoltées sur 42 jeunes <br/>
                    d'environ 21 ans, en bachelor <br/>
                    designer et développeur interactifs
                </div>
                <Link to="/1/question" className="btn btn__arrow"><i className="arrow"/></Link>
            </div>
        );
    }
}


