import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

export default class Answer5 extends Component {
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
            <div className="detail">
                <div className="flex">
                    <div className="cercle cercle__1 flex column">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                        <div className="count">
                                            <CountUp start={0}
                                                     end={38.1}
                                                     duration={2.75}
                                                     useEasing={true} decimals={1} decimal="," suffix={" %"}/>
                                            {this.checkScroll()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            sont prêts <br/> à adopter
                        </div>
                    </div>
                    <div className="cercle cercle__2 flex column">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                        <div className="count">
                                            <CountUp start={0}
                                                     end={1.7}
                                                     duration={2.75}
                                                     useEasing={true} decimals={1} decimal="," />
                                            {this.checkScroll()}
                                        </div> : '0'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            enfants voulus
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


