import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Publications from "../Pages/Publications/Publications";
import Courses from "../Pages/Courses/Courses";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <Root />
        </>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/publications",
                element: <Publications />
            },
            {
                path: "/courses",
                element: <Courses />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    }
])