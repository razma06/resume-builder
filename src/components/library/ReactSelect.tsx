import React from "react";
import Select, { GroupBase, Props } from "react-select";

interface SelectProps<
    Option = unknown,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
> {}

interface SelectType<SelectProps> extends Props {
    isError?: boolean;
    isSuccess?: boolean;
}

const ReactSelect = React.forwardRef(
    (props: SelectType<SelectProps>, ref: any) => {
        const colorStyles = {
            control: (styles: any, { isFocused, isSelected }: any) => ({
                ...styles,
                backgroundColor: "white",
                height: "48px",
                marginTop: "8px",
                boxShadow: "none",
                shadow: "none",
                outline: "none",
                borderColor: props.isError
                    ? "var(--error)"
                    : props.isSuccess
                    ? "var(--success)"
                    : "var(--border)",
                borderWidth: isFocused ? "2px" : "1px",
            }),
            option: (
                styles: any,
                { data, isDisabled, isFocused, isSelected, isActive }: any
            ) => {
                return {
                    ...styles,
                    backgroundColor: isDisabled
                        ? null
                        : isFocused
                        ? "#C3DCEE"
                        : isSelected
                        ? "white"
                        : isActive
                        ? "red"
                        : "white",
                    color: isDisabled
                        ? "#ccc"
                        : isSelected
                        ? "black"
                        : data.color,
                    cursor: isDisabled ? "not-allowed" : "pointer",
                };
            },
            menu: (base: any) => ({
                ...base,
                boxShadow: "0px 16px 28px rgba(0, 0, 0, 0.24)",
            }),
        };
        return <Select ref={ref} {...props} styles={colorStyles} />;
    }
);

export default ReactSelect;
