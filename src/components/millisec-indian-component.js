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

  return <div>
     {formattedDate}
     </div>;
};

export default TimeChangeComponent;
