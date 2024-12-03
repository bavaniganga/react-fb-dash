

import React from "react";

const DateComponent = ({ date, showTime = false }) => {
  if (!date) {
    console.error("Invalid `date` prop:", date);
    return <div>No valid data provided</div>;
  }

  // Convert date to a Date object
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    console.error("Invalid date format:", date);
    return <div>Invalid date</div>;
  }

  const now = new Date(); // Current date and time

  // Calculate the difference in days
  const diffInDays = Math.floor((now - parsedDate) / (1000 * 60 * 60 * 24));

  // Format the relative time (e.g., "2 days ago" or "Today")
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const relativeTime =
    diffInDays === 0 ? "Today" : rtf.format(-diffInDays, "day");

  // Format the date in IST without the comma after the day
  const dateoptions = {
    timeZone: "Asia/Kolkata", // Set to IST
    year: "numeric",
    month: "short",
    day: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // hour12: true,
  };
  const timeOptions = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDate = parsedDate
    .toLocaleString("en-IN", dateoptions)
    .replace(/, (\d{4})$/, " $1"); // Remove comma before the year
  const formattedTime = parsedDate.toLocaleString("en-IN", timeOptions);

  return (
    <div>
      <div>{formattedDate}, {" "}
      {showTime && <span>{formattedTime}</span>}
      </div>
      <div style={{ color: "red" }}>{relativeTime}</div>
    </div>
  );
};

export default DateComponent;

