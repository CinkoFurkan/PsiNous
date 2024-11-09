import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Team from "../pages/team";
import Events from "../pages/events";
import Blog from "../pages/blog";
import Contact from "../pages/contact";
import MemberDetail from "../pages/memberDetail";
import BlogDetails from "../pages/blog/components/blog-details";
import TeamDetails from "../pages/team/components/team-details";
import WebLayout from "../layout/web";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <WebLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/Ana sayfa",
                element: <Home/>
            },
            {
                path: "/biz Kimiz?",
                element: <About/>
            },
            {
                path: "/ekibimiz/birimlerimiz",
                element: <Team/>
            },
            {
                path: "/etkinliklerimiz",
                element: <Events/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/İletişim",
                element: <Contact/>
            },
            {
                path: "/member/:id",
                element: <MemberDetail/>
            },
            {
                path: "/blog/:id",
                element: <BlogDetails/>
            },
            {
                path: "/Birimlerimiz",
                element: <TeamDetails/>
            },
            {
                path: "/Hakkımızda",
                element: <About/>
            }
        ]
    }
])


export default routes