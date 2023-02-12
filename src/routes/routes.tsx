import Add from "@/pages/add/Add";
import BuiltResume from "@/pages/builtResume/BuiltResume";
import ExperienceForm from "@/pages/experiencePage/ExperienceForm";
import ExperiencePage from "@/pages/experiencePage/ExperiencePage";
import GeneralInfoForm from "@/pages/generalInfoPage/GeneralInfoForm";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "add/*",
        element: <Add />,
        children: [
            {
                path: "1",
                element: <GeneralInfoForm />,
            },
            {
                path: "2",
                element: <ExperiencePage />,
            },
            {
                path: "3",
                element: <ExperiencePage />,
            },
        ],
    },
    {
        path: "resume",
        element: <BuiltResume />,
    },
]);
export default routes;
