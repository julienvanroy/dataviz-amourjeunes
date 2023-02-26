import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Home from "./pages/Home.jsx";
import Question from "./pages/Question.jsx";
import Answer from "./pages/Answer.jsx";
import Scoring from "./pages/Scoring.jsx";
import OnlyDesktop from "./components/OnlyDesktop.jsx";


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            exact: true
        },
        {
            path: "/1/question",
            element: <Question questionId={1} />,
            exact: true

        },
        {
            path: "/:questionId/answer",
            element: <Answer />,
            exact: true

        },
        {
            path: "/scoring",
            element: <Scoring />,
            exact: true

        },
        {
            path: "*",
            element: <Home />,
        },
    ]);

    return (
        <>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={450}
                    classNames="fade"
                >
                    <RouterProvider router={router}/>
                </CSSTransition>
            </TransitionGroup>
            <OnlyDesktop/>
        </>
    );
}

export default App;
