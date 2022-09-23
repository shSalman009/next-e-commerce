import React from "react";

import Select from "react-select";
import { clothsOption, colourOptions, sizesOption } from "./data";

const theme = (theme) => ({
  ...theme,
  borderRadius: 8,
  colors: {
    ...theme.colors,
    primary: "black",
  },
});

const customStyle = {
  control: (base, state) => ({
    ...base,
    background: "#F9FAFB",
    height: "42px",
  }),
};

export function SelectColor({ onChange }) {
  return (
    <Select
      onChange={onChange}
      instanceId="long-value-select"
      styles={customStyle}
      placeholder="Select Color..."
      theme={theme}
      closeMenuOnSelect={true}
      isMulti={false}
      options={colourOptions}
    />
  );
}

export function SelectSize({ onChange }) {
  return (
    <Select
      onChange={onChange}
      instanceId="long-value-select"
      styles={customStyle}
      placeholder="Select Size..."
      theme={theme}
      closeMenuOnSelect={true}
      isMulti={false}
      options={sizesOption}
    />
  );
}

export function SelectCategory({ onChange }) {
  return (
    <Select
      onChange={onChange}
      instanceId="long-value-select"
      styles={customStyle}
      placeholder="Select Category..."
      theme={theme}
      isMulti={false}
      closeMenuOnSelect={true}
      options={clothsOption}
    />
  );
}
