// import React from "react";
// import { data } from "../constants/data"; // Ensure this contains the correct data

// const LastSeenComponent = () => {
//   if (!data || !data.last_seen) {
//     console.error("Invalid `data` prop:", data);
//     return <div>No valid data provided</div>;
//   }

//   // Convert last_seen to a Date object
//   const lastSeen = new Date(data.last_seen);

//   if (isNaN(lastSeen.getTime())) {
//     console.error("Invalid date format in `data.last_seen`:", data.last_seen);
//     return <div>Invalid date</div>;
//   }

//   const now = new Date(); // Current date and time

//   // Calculate the difference in days
//   const diffInDays = Math.floor((now - lastSeen) / (1000 * 60 * 60 * 24));

//   // Format the relative time (e.g., "2 days ago" or "Today")
//   const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
//   const relativeTime =
//     diffInDays === 0 ? "Today" : rtf.format(-diffInDays, "day");

//   // Format the last seen date and time in IST without the comma after the day
//   const options = {
//     timeZone: "Asia/Kolkata", // Set to IST
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   };

//   const lastSeenFormatted = lastSeen
//     .toLocaleString("en-IN", options)
//     .replace(/, (\d{4})$/, " $1"); // Remove comma before the year

//   return (
//     <div>
//       <div>{lastSeenFormatted}</div>
//       <div style={{ color: "red" }}>{relativeTime}</div>
//     </div>
//   );
// };

// export default LastSeenComponent;

import React from "react";

const DateComponent = ({ date }) => {
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
  const options = {
    timeZone: "Asia/Kolkata", // Set to IST
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDate = parsedDate
    .toLocaleString("en-IN", options)
    .replace(/, (\d{4})$/, " $1"); // Remove comma before the year

  return (
    <div>
      <div>{formattedDate}</div>
      <div style={{ color: "red" }}>{relativeTime}</div>
    </div>
  );
};

export default DateComponent;

