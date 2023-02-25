import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

export default class Answer4 extends Component {
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
                <div className="flex">
                    <div className="flex column">
                        <div className="cercle cercle__1 flex column">
                            <div>
                                <VisibilitySensor>
                                    {({isVisible}) =>
                                        <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                            <div className="count">
                                                <CountUp start={0}
                                                         end={59.5}
                                                         duration={2.75}
                                                         useEasing={true} decimals={1} decimal="," suffix={" %"}/>
                                                {this.checkScroll()}
                                            </div> : '0 %'}</div>
                                    }
                                </VisibilitySensor>
                            </div>
                            <div>
                                croient au <br/> mariage
                            </div>
                        </div>
                        <div className="cercle cercle__1 flex column text">
                            <div>
                                Le fait que <br/> les parents soient <br/> divorcés n'influence pas <br/> la croyance
                            </div>
                        </div>
                    </div>
                    <div className="flex column">
                        <div className="cercle cercle__2 flex column">
                            <div>
                                <VisibilitySensor>
                                    {({isVisible}) =>
                                        <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                            <div className="count">
                                                <CountUp start={0}
                                                         end={40.5}
                                                         duration={2.75}
                                                         useEasing={true} decimals={1} decimal="," suffix={" %"}/>
                                                {this.checkScroll()}
                                            </div> : '0 %'}</div>
                                    }
                                </VisibilitySensor>
                            </div>
                            <div>
                                ne croient pas au <br/> mariage
                            </div>
                        </div>
                        <div className="cercle cercle__2 flex column text">
                            <div>
                                2 personnes <br/> ne croient pas <br/> au mariage mais <br/> veulent se marier
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


