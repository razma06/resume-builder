export const formatNumber = (number: string) => {
    return (
        number.substring(0, 4) +
        " " +
        number.substring(4, 7) +
        " " +
        number.substring(7, 9) +
        " " +
        number.substring(9, 11) +
        " " +
        number.substring(11, 13)
    );
};

export const fieldsAreEmpty = (fields: Object) => {
    return Object.values(fields).every((value) => {
        return !value === true;
    });
};
