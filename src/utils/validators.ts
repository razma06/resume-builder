export const nameValidation = {
    required: true,
    minLength: {
        value: 2,
        message: "Name must be at least 2 characters",
    },
    pattern: {
        value: /^[ა-ჰ]+$/,
        message: "Name must contain only letters",
    },
};

export const mailValidation = {
    required: true,
    pattern: {
        value: /^[a-zA-Z0-9._-]+@redberry.com$/,
        message: "Email is not valid",
    },
};

export const phoneValidation = {
    required: true,
    pattern: {
        value: /^(\+995)?5[0-9]{8}$/,
        message: "Mobile number is not valid",
    },
};

export const imageValidation = {
    required: {
        value: true,
        message: "Image is required",
    },
};

export const aboutMeValidation = {
    required: false,
};

export const dateValidation = {
    required: {
        value: true,
        message: "Date is required",
    },
};

export const jobDescriptionValidation = {
    required: {
        value: true,
        message: "Job description is required",
    },
};
