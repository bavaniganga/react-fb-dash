import React from "react";
import"../styles/header.css";
import { IoMdRefresh } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";


const Topnavbar = (e) =>{

    return (
      <div>
        <div className="buttons">
          <button className="back">BACK</button>
          <div className="edit-and-all">
            <button>
              <MdOutlineEdit color="blue" style={{ verticalAlign: "middle" }} />{" "}
              EDIT
            </button>
            <button>
              <MdOutlineDeleteOutline
                color="red"
                style={{ verticalAlign: "middle" }}
              />{" "}
              DELETE
            </button>
            <button>
              <IoMdRefresh color="blue" style={{ verticalAlign: "middle" }} />{" "}
              REFRESH
            </button>
          </div>
        </div>
      </div>
    );
}
export default Topnavbar;