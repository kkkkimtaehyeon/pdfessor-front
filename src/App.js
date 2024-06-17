import './App.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Main from "./pages/Main";
import NewQuiz from "./pages/quiz/NewQuiz";
import Quiz from "./pages/Quiz";
import UploadPdf from "./pages/pdf/UploadPdf";
import MyPdfs from "./pages/pdf/MyPdfs";
import MyQuiz from "./pages/quiz/MyQuiz";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />
        },
        {
            path: "/upload",
            element: <UploadPdf />
        },
        {
            path: "/new-quiz",
            element: <NewQuiz />
        },
        {
            path: "/my-quiz",
            element: <MyQuiz />
        },
        {
            path: "/quiz",
            element: <Quiz />
        },
        {
            path: "/mypdf",
            element: <MyPdfs />
        },
        ]
    );
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
