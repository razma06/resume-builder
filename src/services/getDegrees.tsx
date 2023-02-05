import { useEffect, useState } from "react";
import base from "./baseUrl";

export const getDegrees = () => {
    return base.get("/degrees");
};
