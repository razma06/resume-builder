import Add from "@/pages/add/Add";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "add",
        element: <Add />,
    },
]);
export default routes;
