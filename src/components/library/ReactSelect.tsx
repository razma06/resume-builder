import React from "react";
import SelectType from "react-select/dist/declarations/src/Select";
import Select, { GroupBase, Props } from "react-select";

interface SelectProps<
    Option = unknown,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
> {}

const ReactSelect = React.forwardRef((props: Props<SelectProps>, ref: any) => {
    const colorStyles = {
        control: (styles: any, { isFocused, isSelected }: any) => ({
            ...styles,
            backgroundColor: "white",
            height: "48px",
            marginTop: "8px",
            boxShadow: "none",
            shadow: "none",
            outline: "none",
            borderColor: "var(--border)",
            border: isSelected
                ? "2px solid var(--border)"
                : "1px solid var(--border)",
        }),
        option: (
            styles: any,
            { data, isDisabled, isFocused, isSelected }: any
        ) => {
            return {
                ...styles,
                backgroundColor: isDisabled
                    ? null
                    : isSelected
                    ? "white"
                    : isFocused
                    ? "#000"
                    : null,
                color: isDisabled ? "#ccc" : isSelected ? "black" : data.color,
                cursor: isDisabled ? "not-allowed" : "default",
            };
        },
    };
    return <Select ref={ref} {...props} styles={colorStyles} />;
});

export default ReactSelect;
