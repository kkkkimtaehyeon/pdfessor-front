import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Main from "./pages/Main";
import NewTest from "./pages/test/NewTest";
import Quiz from "./pages/Quiz";
import UploadPdf from "./pages/pdf/UploadPdf";
import MyPdfs from "./pages/pdf/MyPdfs";

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
            element: <NewTest />
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
