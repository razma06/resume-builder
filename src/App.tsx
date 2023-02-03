import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import "./App.css";
import Home from "@/pages/home/Home";
import routes from "@/routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
    return <RouterProvider router={routes} />;
}

export default App;
