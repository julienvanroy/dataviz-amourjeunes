import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

export default class Answer6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check1: false,
            check2: false,
            check3: false
        };
    }

    checkScroll1() {
        if (this.state.check1 === false) {
            this.setState({
                check1: true
            })
        }
    }

    checkScroll2() {
        if (this.state.check2 === false) {
            this.setState({
                check2: true
            })
        }
    }

    checkScroll3() {
        if (this.state.check3 === false) {
            this.setState({
                check3: true
            })
        }
    }

    render() {
        return (
            <div className="detail">
                <div className="flex">
                    <div className="cercle cercle__1 flex column">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check1 === false) || this.state.check1 === true ?
                                        <div className="count">
                                            <CountUp start={0}
                                                     end={83.3}
                                                     duration={2.75}
                                                     useEasing={true} decimals={1} decimal="," suffix={" %"}/>
                                            {this.checkScroll1()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            aiment <br/> le sexe
                        </div>
                    </div>
                    <div className="cercle cercle__1 flex column">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check1 === false) || this.state.check1 === true ?
                                        <div className="count">
                                            <CountUp start={0}
                                                     end={9.5}
                                                     duration={2.75}
                                                     useEasing={true} decimals={1} decimal="," suffix={" %"}/>
                                            {this.checkScroll1()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            s'en fichent
                        </div>
                    </div>
                    <div className="cercle cercle__1 flex column">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check1 === false) || this.state.check1 === true ?
                                        <div className="count">
                                            <CountUp start={0}
                                                     end={7.2}
                                                     duration={2.75}
                                                     useEasing={true} decimals={1} decimal="," suffix={" %"}/>
                                            {this.checkScroll1()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            n'ont jamais pratiqué
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="cercle cercle__1 flex column">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check2 === false) || this.state.check2 === true ?
                                        <div className="count">
                                            <CountUp start={0}
                                                     end={5.21}
                                                     duration={2.75}
                                                     useEasing={true} decimals={2} decimal=","/>
                                            {this.checkScroll2()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            partenaires <br/> en moyenne
                        </div>
                    </div>
                    <div className="cercle cercle__1 flex column">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check2 === false) || this.state.check2 === true ?
                                        <div className="count">
                                            <CountUp start={0}
                                                     end={50}
                                                     duration={2.75}
                                                     useEasing={true} suffix={" %"}/>
                                            {this.checkScroll2()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            en ont eu un seul
                        </div>
                    </div>
                    <div className="flex column">
                        <div className="cercle cercle__1"/>
                        <div className="text">
                            1 personne <br/> a eu 70 partenaires
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="cercle cercle__1 flex column">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check3 === false) || this.state.check3 === true ?
                                        <div className="count">
                                            <CountUp start={0}
                                                     end={4.93}
                                                     duration={2.75}
                                                     useEasing={true} decimals={2} decimal=","/>
                                            {this.checkScroll3()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            nombre idéal de <br/> rapports / semaine
                        </div>
                    </div>
                    <div className="cercle cercle__1 flex column">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check3 === false) || this.state.check3 === true ?
                                        <div className="count">
                                            <CountUp start={0}
                                                     end={81}
                                                     duration={2.75}
                                                     useEasing={true} suffix={" %"}/>
                                            {this.checkScroll3()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            préfèrent l'amour <br/> au plan Q
                        </div>
                    </div>
                    <div className="cercle cercle__2 flex column">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check3 === false) || this.state.check3 === true ?
                                        <div className="count">
                                            <CountUp start={0}
                                                     end={45.2}
                                                     duration={2.75}
                                                     useEasing={true} decimals={1} decimal="," suffix={" %"}/>
                                            {this.checkScroll3()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            regrettent <br/> un rapport
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


