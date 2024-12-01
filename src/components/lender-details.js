import React, { useState } from "react";
import { data } from "../constants/data";
import DateComponent from "./UTCdatechange-to-indian";
import "../styles/lender-details.css";
import { FaCheck } from "react-icons/fa6";

const LenderDetails = () => {
  const [copyState, setCopyState] = useState({
    mobileNumber: false,
    appUserId: false,
  });

  const copyToClipboard = (text, key) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyState((prev) => ({ ...prev, [key]: true }));
        setTimeout(() => {
          setCopyState((prev) => ({ ...prev, [key]: false }));
        }, 1000); // Revert back to "Copy" after 1 second
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };


  return (
    <div className="lender-detailsbar">
      <div className="name-id">
        <p>
          <strong>{data.name}</strong>
        </p>
        <p>
          {data.mobileNumber}{" "}
          <span>
            <button
              className="phnumber"
              onClick={() => copyToClipboard(data.mobileNumber, "mobileNumber")}
            >
              {copyState.mobileNumber ? <FaCheck /> : "Copy"}
            </button>
          </span>
        </p>
        <p className="id">
          {data.app_user_id}{" "}
          <span>
            <button
              className="userid"
              onClick={() => copyToClipboard(data.app_user_id, "appUserId")}
            >
              {copyState.appUserId ? <FaCheck /> : "Copy"}
            </button>
          </span>
        </p>
      </div>

      <div>
        <p>
          <strong>Country</strong>
        </p>
        <p>{data.country_code ? data.country_code : "NA"}</p>
      </div>

      <div>
        <p>
          <strong>Lead-type</strong>
        </p>
        <p>{data.lenderType}</p>
      </div>

      <div>
        <p>
          <strong>Price</strong>
        </p>
        <p>{data.price}</p>
      </div>

      <div>
        <p>
          <strong>Last-seen</strong>
        </p>
        <DateComponent date={data.last_seen} />
      </div>
    </div>
  );
};

export default LenderDetails;

// import React from "react";
// import { data } from "../constants/data";
// import DateComponent from "./UTCdatechange-to-indian";
// import "../styles/lender-details.css";

// const LenderDetails = () => {
//   const copyToClipboard = (text) => {
//     navigator.clipboard
//       .writeText(text)
//       .then(() => {
//         alert(`Copied to clipboard: ${text}`);
//       })
//       .catch((err) => {
//         console.error("Failed to copy: ", err);
//       });
//   };

//   return (
//     <div className="lender-detailsbar">
//       <div className="name-id">
//         <p>
//           <strong>{data.name}</strong>
//         </p>
//         <p>
//           {data.mobileNumber}{" "}
//           <span>
//             <button
//               className="phnumber"
//               onClick={() => copyToClipboard(data.mobileNumber)}
//             >
//               Copy
//             </button>
//           </span>
//         </p>
//         <p className="id">
//           {data.app_user_id}{" "}
//           <span>
//             <button
//               className="userid"
//               onClick={() => copyToClipboard(data.app_user_id)}
//             >
//               Copy
//             </button>
//           </span>
//         </p>
//       </div>

//       <div>
//         <p>
//           <strong>Country</strong>
//         </p>
//         <p>{data.country_code ? data.country_code : "NA"}</p>
//       </div>

//       <div>
//         <p>
//           <strong>Lead-type</strong>
//         </p>
//         <p>{data.lenderType}</p>
//       </div>

//       <div>
//         <p>
//           <strong>Price</strong>
//         </p>
//         <p>{data.price}</p>
//       </div>

//       <div>
//         <p>
//           <strong>Last-seen</strong>
//         </p>
//         <DateComponent date={data.last_seen} />
//       </div>
//     </div>
//   );
// };
// export default LenderDetails;
