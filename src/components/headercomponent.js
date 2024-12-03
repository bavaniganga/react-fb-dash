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

// import React from "react";
// import"../styles/header.css";
// import { IoMdRefresh } from "react-icons/io";
// import { MdOutlineEdit } from "react-icons/md";
// import { MdOutlineDeleteOutline } from "react-icons/md";

// const Topnavbar = (e) =>{

//     return (
//       <div>
//         <div className="buttons">
//           <button className="back">BACK</button>
//           <div className="edit-and-all">
//             <button>
//               <MdOutlineEdit color="blue" style={{ verticalAlign: "middle" }} />{" "}
//               EDIT
//             </button>
//             <button>
//               <MdOutlineDeleteOutline
//                 color="red"
//                 style={{ verticalAlign: "middle" }}
//               />{" "}
//               DELETE
//             </button>
//             <button>
//               <IoMdRefresh color="blue" style={{ verticalAlign: "middle" }} />{" "}
//               REFRESH
//             </button>
//           </div>
//         </div>
//       </div>
//     );
// }
// export default Topnavbar;
