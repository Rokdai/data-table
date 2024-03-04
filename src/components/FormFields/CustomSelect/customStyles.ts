import { GroupBase, StylesConfig } from "react-select";
import { IOptions } from "./types";

export const setCustomStyles = (
  isError?: boolean
): StylesConfig<IOptions, false, GroupBase<IOptions>> => ({
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: "4px",
    border:
      isError && !state.isFocused
        ? "1px solid #b0263d"
        : state.isFocused
        ? "1px solid #E6ECEF"
        : "1px solid #E6ECEF",
    boxShadow: "none",
    outline: "none",

    ":hover": {
      border:
        isError && !state.isFocused
          ? "1px solid #b0263d"
          : state.isFocused
          ? "1px solid #E6ECEF"
          : "1px solid #E6ECEF",
    },

    ">div:last-child": {
      ">div": {
        svg: {
          transform: state.menuIsOpen ? "rotate(180deg)" : "",
          transition: "transform 0.7s",
        },
      },
    },
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    svg: {
      width: "14px",
      height: "14px",
      fill: "#6F7B8D",
    },
  }),
  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    color: "#000000",
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    padding: "0 14px",
    margin: "4px 0",
    borderRadius: "4px",
    border: "1px solid #E6ECEF",
    boxShadow: "0px 2px 8px 0px #00000014",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    padding: "0",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    padding: "14px 0",
    background: "none",
    borderBottom: "1px solid #E6ECEF",
    lineHeight: "16px",
    color: state.isSelected ? "#212229" : "#868A8D",

    ":last-child": {
      borderBottom: "none",
    },

    ":hover": {
      background: "none",
      fontWeight: "700",
      color: "#212229",
    },
  }),
});
