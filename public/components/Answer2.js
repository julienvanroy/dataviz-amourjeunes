import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

export default class Answer2 extends Component {
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
                <div className="data relative">
                    <div className="chiffre">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                        <div className="count"><CountUp start={0}
                                                                        end={11.9}
                                                                        duration={2.75}
                                                                        useEasing={true} decimals={1} decimal=","
                                                                        suffix={" %"}/>{this.checkScroll()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            ont déja <br/> trompé
                        </div>
                    </div>
                    <div className="chiffre">
                        <div>
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                        <div className="count"><CountUp start={0}
                                                                        end={23.8}
                                                                        duration={2.75}
                                                                        useEasing={true} decimals={1} decimal=","
                                                                        suffix={" %"}/>{this.checkScroll()}
                                        </div> : '0 %'}</div>
                                }
                            </VisibilitySensor>
                        </div>
                        <div>
                            se sont fait <br/> tromper
                        </div>
                    </div>
                </div>
                <div className="cercle cercle__2 flex column">
                    <div>
                        <VisibilitySensor>
                            {({isVisible}) =>
                                <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                    <div className="count"><CountUp start={0}
                                                                    end={16.7}
                                                                    duration={2.75}
                                                                    useEasing={true} decimals={1} decimal=","
                                                                    suffix={" %"}/>{this.checkScroll()}
                                    </div> : '0 %'}</div>
                            }
                        </VisibilitySensor>
                    </div>
                    <div>
                        préfèrent <br/> les relations <br/> libres
                    </div>
                </div>
                <div className="forme forme__2 flex column">
                    <div>
                        <VisibilitySensor>
                            {({isVisible}) =>
                                <div>{(isVisible && this.state.check === false) || this.state.check === true ?
                                    <div className="count">
                                        <CountUp start={0}
                                                 end={14.3}
                                                 duration={2.75}
                                                 useEasing={true} decimals={1} decimal="," suffix={" %"}/>
                                        {this.checkScroll()}
                                    </div> : '0 %'}</div>
                            }
                        </VisibilitySensor>
                    </div>
                    <div>
                        ont déja eu <br/> plusieurs <br/> relations en <br/> même temps
                    </div>
                </div>
            </div>
        );
    }
}


