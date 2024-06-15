import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Main from "./pages/Main";
import NewQuiz from "./pages/NewQuiz";
import Quiz from "./pages/Quiz";
import UploadPdf from "./pages/pdf/UploadPdf";
import MyPdf from "./pages/pdf/MyPdf";

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
            path: "/new",
            element: <NewQuiz />
        },
        {
            path: "/quiz",
            element: <Quiz />
        },
        {
            path: "/mypdf",
            element: <MyPdf />
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
