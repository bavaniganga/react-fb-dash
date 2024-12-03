import React from "react";

const DropdownSelect = ({ value, onChange, options, defaultLabel }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">{defaultLabel}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownSelect;
