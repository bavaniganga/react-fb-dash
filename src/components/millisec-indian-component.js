import React from "react";

const TimeChangeComponent = ({ time }) => {
  if (!time) {
    console.error("Invalid `time` prop:", time);
    return <div>No valid purchase date provided</div>;
  }

  // Convert milliseconds to a Date object
  const date = new Date(time);

  // Check for invalid date
  if (isNaN(date.getTime())) {
    console.error("Invalid date format in `time` prop:", time);
    return <div>Invalid purchase date</div>;
  }

  // Format the date and time to IST
  const options = {
    timeZone: "Asia/Kolkata", // IST timezone
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const formattedDate = date.toLocaleString("en-IN", options);

  // Calculate days ago
  const currentDate = new Date();
  const timeDifference = currentDate - date;
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // Calculate expiry date (7 days from the given time)
  const expiryDate = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
  const formattedExpiryDate = expiryDate.toLocaleString("en-IN", options);

  // Check if expired
  const isExpired = currentDate > expiryDate;

  return (
    <div>
      <div> {formattedDate}</div>
      {daysAgo > 0 && (
        <div style={{ color: "red", marginTop: "5px" }}>
          {daysAgo} {daysAgo === 1 ? "day ago" : "days ago"}
        </div>
      )}
      {/* <div style={{ marginTop: "10px" }}>
        Expiry Date: {formattedExpiryDate}
        {isExpired && (
          <span style={{ color: "red", marginLeft: "10px" }}>Expired</span>
        )}
      </div> */}
    </div>
  );
};

export default TimeChangeComponent;
