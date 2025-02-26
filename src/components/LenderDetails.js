import React, { useState, useEffect } from "react";
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

const LenderDetails = ({ userId, data }) => {
  const otherDetails = [
    { label: "Country", value: data?.country_code || "NA" },
    { label: "Lead Type", value: data?.lenderType || "NA" },
    { label: "Price", value: data?.price || "NA" },
    {
      label: "Last Seen",
      value: data?.last_seen ? (
        <DateComponent date={data?.last_seen} showTime={true} />
      ) : (
        "NA"
      ),
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className="lender-detailsbar">
      <div className="name-id">
        <p>
          <strong>{data?.name}</strong>
        </p>
        <p>
          {data?.mobileNumber}{" "}
          <button
            className="phnumber"
            onClick={() => copyToClipboard(data?.mobileNumber)}
          >
            Copy
          </button>
        </p>
        <p>
          {data?.app_user_id}{" "}
          <button
            className="userid"
            onClick={() => copyToClipboard(data?.app_user_id)}
          >
            Copy
          </button>
        </p>
      </div>

      {otherDetails.map(({ label, value }, index) => (
        <DetailCard key={index} label={label} value={value} />
      ))}
    </div>
  );
};

export default LenderDetails;
