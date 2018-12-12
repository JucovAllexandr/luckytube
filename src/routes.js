import HomeLayout from "./components/HomeLayout";
import About from "./components/About";
import Contact from "./components/Contact";
import Secret from "./components/Secret";

export default [
    {
        path: "/",
        component: HomeLayout,
        exact: true,
    }
    // },
    // {
    //     path: "/about",
    //     component: About,
    //     exact: true,
    // },
    // {
    //     path: "/contact",
    //     component: Contact,
    //     exact: true,
    // },
    // {
    //     path: "/secret",
    //     component: Secret,
    //     exact: true,
    // },
];
