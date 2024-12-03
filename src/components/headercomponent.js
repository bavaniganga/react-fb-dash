import React from "react";
import "../styles/header.css";
import { IoMdRefresh } from "react-icons/io";
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";

const ActionButton = ({ label, Icon, color }) => (
  <button className="action-button">
    {Icon && <Icon color={color} style={{ verticalAlign: "middle" }} />}
    {label}
  </button>
);

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <ActionButton label="BACK" Icon={null} />
      <div className="action-group">
        <ActionButton label="EDIT" Icon={MdOutlineEdit} color="blue" />
        <ActionButton
          label="DELETE"
          Icon={MdOutlineDeleteOutline}
          color="red"
        />
        <ActionButton label="REFRESH" Icon={IoMdRefresh} color="blue" />
      </div>
    </div>
  );
};

export default TopNavbar;



