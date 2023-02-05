import axios from "axios";

const base = axios.create({
    baseURL: "https://resume.redberryinternship.ge/api",
});

export default base;
