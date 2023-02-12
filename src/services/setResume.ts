import base from "./baseUrl";

export const setResume = (data: any) => {
    return base.post("/cvs", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};
