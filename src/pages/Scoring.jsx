import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Scoring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: (localStorage.getItem('score') ? localStorage.getItem('score') : 0),
            nbQuestions : localStorage.getItem('nbQuestions') ? parseInt(localStorage.getItem('nbQuestions')) : 0
        };
    }
    colorCercle = () => {
        if( this.state.score/this.state.nbQuestions >= 0.5){
            return "cercle__1 "
        }else return "cercle__2 "
    }
    render() {
        return (
            <div className="scoring">
                <h1>Peu importe les chiffres <br/> suivez votre cœur !</h1>
                <div className="flex row">
                    <img src="/assets/img/1/amour-oui.svg" />
                    <img src="/assets/img/2/fidélité-cadenas-couple.svg" />
                    <img src="/assets/img/3/réseaux-tel-seul.svg" />
                    <div className={"cercle "+this.colorCercle()+"flex column reverse"}>
                        <div>{this.state.score}/{this.state.nbQuestions}</div>
                        <div>score</div>
                    </div>
                    <img src="/assets/img/4/fidèle-oui.svg" />
                    <img src="/assets/img/5/ovaire.svg" />
                    <img src="/assets/img/6/zizi-content.svg" />
                </div>
                <div className="scoring__credit">
                    Réalisé par Julien Vanroy et Elisa Masfrand
                </div>
                <Link to="/" className="btn">Recommencer</Link>
            </div>
        );
    }
}


