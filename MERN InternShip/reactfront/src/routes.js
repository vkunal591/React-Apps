import AppHome from "./layout/AppHome";
import Login from "./pages/Login";

const routes = [
    { path: "/", exact: true, name: "Home" },
    {
        path: "/auth/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/home",
        name: "Home",
        component: AppHome,
    },
];

export default routes;
