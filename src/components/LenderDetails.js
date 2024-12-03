import React, { useState } from "react";
import { data } from "../constants/data";
import DateComponent from "./UTCdatechangeToIndian";
import "../styles/lender-details.css";
import { FaCheck } from "react-icons/fa6";

const DetailCard = ({ label, value, isCopyable, onCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (isCopyable && value) {
      onCopy(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000); // Reset after 1 second
    }
  };

  return (
    <div className="detail-card">
      {label && (
        <p>
          <strong>{label}</strong>
        </p>
      )}
      <p>
        {value || "NA"}
        {isCopyable && value && (
          <button className="copy-button" onClick={handleCopy}>
            {isCopied ? <FaCheck /> : "Copy"}
          </button>
        )}
      </p>
    </div>
  );
};

const LenderDetails = () => {
  const otherDetails = [
    { label: "Country", value: data.country_code },
    { label: "Lead Type", value: data.lenderType },
    { label: "Price", value: data.price },
    {
      label: "Last Seen",
      value: <DateComponent date={data.last_seen} showTime={true} />,
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className="lender-detailsbar">
      {/* Grouped Div for Name, Mobile Number, and User ID */}
      <div className="name-id">
        <p>
          <strong>{data.name}</strong>
        </p>
        <p>
          {data.mobileNumber}{" "}
          <button
            className="phnumber"
            onClick={() => copyToClipboard(data.mobileNumber)}
          >
            Copy
          </button>
        </p>
        <p>
          {data.app_user_id}{" "}
          <button
            className="userid"
            onClick={() => copyToClipboard(data.app_user_id)}
          >
            Copy
          </button>
        </p>
      </div>

      {/* Render Remaining Details */}
      {otherDetails.map(({ label, value }, index) => (
        <DetailCard key={index} label={label} value={value} />
      ))}
    </div>
  );
};

export default LenderDetails;



// import React, { useState } from "react";
// import { data } from "../constants/data";
// import DateComponent from "./UTCdatechangeToIndian";
// import "../styles/lender-details.css";
// import { FaCheck } from "react-icons/fa6";

// const LenderDetails = () => {
//   const [copyState, setCopyState] = useState({
//     mobileNumber: false,
//     appUserId: false,
//   });

//   const copyToClipboard = (text, key) => {
//     navigator.clipboard
//       .writeText(text)
//       .then(() => {
//         setCopyState((prev) => ({ ...prev, [key]: true }));
//         setTimeout(() => {
//           setCopyState((prev) => ({ ...prev, [key]: false }));
//         }, 1000); // Revert back to "Copy" after 1 second
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
//               onClick={() => copyToClipboard(data.mobileNumber, "mobileNumber")}
//             >
//               {copyState.mobileNumber ? <FaCheck /> : "Copy"}
//             </button>
//           </span>
//         </p>
//         <p className="id">
//           {data.app_user_id}{" "}
//           <span>
//             <button
//               className="userid"
//               onClick={() => copyToClipboard(data.app_user_id, "appUserId")}
//             >
//               {copyState.appUserId ? <FaCheck /> : "Copy"}
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
//         <DateComponent date={data.last_seen} showTime={true} />
//       </div>
//     </div>
//   );
// };

// export default LenderDetails;
