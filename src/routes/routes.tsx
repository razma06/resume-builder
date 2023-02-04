import Add from "@/pages/add/Add";
import ExperienceForm from "@/pages/experiencePage/ExperienceForm";
import GeneralInfoForm from "@/pages/generalInfoForm/GeneralInfoForm";
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
        children: [
            {
                path: "1",
                element: <GeneralInfoForm />,
            },
            {
                path: "2",
                element: <ExperienceForm />,
            },
        ],
    },
]);
export default routes;
