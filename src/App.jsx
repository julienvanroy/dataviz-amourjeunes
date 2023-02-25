import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Home from "./pages/Home.jsx";
import Question from "./pages/Question.jsx";
import Answer from "./pages/Answer.jsx";
import Scoring from "./pages/Scoring.jsx";
import OnlyDesktop from "./components/OnlyDesktop.jsx";


function App() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route render={({location}) => (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={450}
                                classNames="fade"
                            >
                                <Switch location={location}>
                                    <Route exact={true} path='/' component={Home}/>
                                    <Route exact={true} path='/:questionId/question' component={Question}/>
                                    <Route exact={true} path='/:questionId/answer' component={Answer}/>
                                    <Route exact={true} path='/scoring' component={Scoring}/>
                                    <Route path="*" component={Home}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )}/>
                </div>
            </BrowserRouter>
            <OnlyDesktop/>
        </div>
    );
}

export default App;
