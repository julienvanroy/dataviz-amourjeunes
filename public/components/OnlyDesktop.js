import React, {Component} from 'react';
import stop from '../assets/img/stop.svg';

export default class OnlyDesktop extends Component {
    render() {
        return (
            <div className="only-desktop flex">
                <div>
                    <h1>Oups ...</h1>
                    <p>Ce site n'est disponible <br/> que sur grand écran.</p>
                    <p>Je t'invite à le consulter <br/> sur ton ordinateur.</p>
                </div>
                <img src={stop} alt="Mince"/>
            </div>
        )
    }
}
