import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

export default class Answer3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false
        };
    }

    checkScroll() {
        if (this.state.check === false) {
            this.setState({
                check: true
            })
        }
    }

    render() {
        return (
            <div className="detail relative">
                <div className="cercle cercle__2 flex column">
                    <div>
                        <VisibilitySensor>
                            {({isVisible}) =>
                                <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                    <div className="count">
                                        <CountUp start={0}
                                                 end={100}
                                                 duration={2.75} suffix={" %"}/>
                                        {this.checkScroll()}
                                    </div> : '0 %'}</div>
                            }
                        </VisibilitySensor>
                    </div>
                    <div>
                        préfèrent rencontrer <br/> dans la vraie vie
                    </div>
                </div>
                <div className="cercle cercle__1 flex column">
                    <div>
                        <VisibilitySensor>
                            {({isVisible}) =>
                                <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                    <div className="count">
                                        <CountUp start={0}
                                                 end={54.8}
                                                 duration={2.75}
                                                 useEasing={true} decimals={1} decimal="," suffix={" %"}/>
                                        {this.checkScroll()}
                                    </div> : '0 %'}</div>
                            }
                        </VisibilitySensor>
                    </div>
                    <div>
                        trouvent que les réseaux <br/> aident à pécho
                    </div>
                </div>
                <div className="flex column list">
                    <div className="cercle cercle__1 flex column">
                        <div>Tinder</div>
                    </div>
                    <div className="cercle cercle__1 flex column">
                        <div>Insta</div>
                    </div>
                    <div className="cercle cercle__1 flex column">
                        <div>Adopte <br/> un mec</div>
                    </div>
                    <div className="cercle cercle__1 flex column">
                        <div>Discord</div>
                    </div>
                    <div className="cercle cercle__1 flex column">
                        <div>MSN</div>
                    </div>
                    <div className="cercle cercle__1 flex column">
                        <div>Soundcloud</div>
                    </div>
                </div>
            </div>
        );
    }
}


