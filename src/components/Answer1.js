import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default class Answer1 extends Component {
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
                <div className="flex row">
                    <div className="cercle cercle__1 flex column">
                        <VisibilitySensor>
                            {({isVisible}) =>
                                <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                    <div className="count">
                                        <div>
                                            <CountUp start={0}
                                                     end={54.8}
                                                     duration={2.75}
                                                     useEasing={true} decimals={1} decimal=","/> %
                                        </div>
                                        {this.checkScroll()}
                                    </div> : '0 %'}</div>
                            }
                        </VisibilitySensor>
                        <div>
                            en couple
                        </div>
                    </div>
                    <div className="forme forme__1">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                        <div className="count"><CountUp start={0}
                                                                        end={41.9}
                                                                        duration={2.75}
                                                                        useEasing={true}
                                                                        decimals={1}
                                                                        decimal=","
                                                                        suffix=" %"
                                                                        pauseResume/>{this.checkScroll()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>

                        </div>
                        <div>
                            se mettent <br/>
                            la pression <br/>
                            dans leur <br/>
                            couple
                        </div>
                    </div>
                    <div className="cercle cercle__1 flex column">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                        <div className="count"><CountUp start={0}
                                                                        end={92.8}
                                                                        duration={2.75}
                                                                        useEasing={true} decimals={1}
                                                                        decimal=","/> %{this.checkScroll()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            par amour
                        </div>
                    </div>
                    <div className="cercle cercle__1 flex column">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                        <div className="count"><CountUp start={0}
                                                                        end={4.2}
                                                                        duration={2.75}
                                                                        useEasing={true} decimals={1} decimal=","/> %
                                            {this.checkScroll()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            par confort
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="cercle"/>
                    <div className="flex column">
                        <div>
                            0 %
                        </div>
                        <div>
                            couple libre
                        </div>
                    </div>
                </div>
                <div className="flex row">
                    <div className="cercle cercle__2 flex column">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                        <div className="count"><CountUp start={0}
                                                                        end={45.2}
                                                                        duration={2.75}
                                                                        useEasing={true} decimals={1}
                                                                        decimal=","/> %{this.checkScroll()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            de célibataires
                        </div>
                    </div>
                    <div className="forme forme__2">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                        <div className="count"><CountUp start={0}
                                                                        end={47.4}
                                                                        duration={2.75}
                                                                        useEasing={true} decimals={1}
                                                                        decimal=","/> %{this.checkScroll()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            complexés <br/> d'être <br/> célibataires
                        </div>
                    </div>
                    <div className="cercle cercle__2 flex column">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                        <div className="count"><CountUp start={0}
                                                                        end={52.3}
                                                                        duration={2.75}
                                                                        useEasing={true} decimals={1}
                                                                        decimal=","/> %{this.checkScroll()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            par désespoir
                        </div>
                    </div>
                    <div className="cercle cercle__2 flex column">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                        <div className="count"><CountUp start={0}
                                                                        end={47.4}
                                                                        duration={2.75}
                                                                        useEasing={true} decimals={1}
                                                                        decimal=","/> %{this.checkScroll()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            par choix
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


