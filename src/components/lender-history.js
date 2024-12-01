import React, { useState, useEffect } from "react";
import { data } from "../constants/data";
import DateComponent from "./UTCdatechange-to-indian.js";
import TimeChangeComponent from "../components/millisec-indian-component.js";
import "../styles/lender-history.css";

const LenderHistory = () => {
  const [historyItems, setHistoryItems] = useState([]);

useEffect(() => {
  const durationInMs = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
  const expiryTime = data.purchased_at_ms
    ? data.purchased_at_ms + durationInMs
    : null;

  // Create an array of history items
  const items = [
    {
      id: "purchased",
      label: "rc_professional_weekly",
      icon: "/dollaricon.png",
      time: data.purchased_at_ms || 0,
      component: <TimeChangeComponent time={data.purchased_at_ms} />,
    },
    {
      id: "last_opened",
      label: "Last opened the app",
      icon: "/personicon.png",
      time: data.last_seen || -1, // Assign a fallback value for missing time
      component: data.last_seen ? (
        <DateComponent date={data.last_seen} />
      ) : (
        "No data available"
      ),
    },
    {
      id: "trial_expired",
      label: "Trial Expired",
      icon: "/plusicon.png",
      time: expiryTime || -1, // Assign a fallback value for missing expiry time
      component: expiryTime ? (
        <TimeChangeComponent time={data.expiration_at_ms} />
      ) : (
        <TimeChangeComponent time ={expiryTime} />
      ),
    },
    {
      id: "trial_taken",
      label: "Trial Taken",
      icon: "/plusicon.png",
      time: data.purchased_at_ms || 0,
      component: <TimeChangeComponent time={data.purchased_at_ms} />,
    },
    {
      id: "first_seen",
      label: "First seen using the app",
      icon: "/personicon.png",
      time: data.first_seen || -1, // Assign a fallback value for missing time
      component: data.first_seen ? (
        <DateComponent date={data.first_seen} />
      ) : (
        "No data available"
      ),
    },
  ];

  // Sort the items by time in descending order (most recent first)
  const sortedItems = items.sort((a, b) => b.time - a.time);

  // Add unique keys for duplicates
  const itemsWithUniqueKeys = sortedItems.map((item, index) => ({
    ...item,
    key: `${item.id}-${item.time}-${index}`, // Unique key based on id, time, and index
  }));

  setHistoryItems(itemsWithUniqueKeys);
}, [data]);


  return (
    <div className="history-table">
      {historyItems.map((item) => (
        <div key={item.key} className="history">
          <strong>
            <img src={item.icon} alt="icon" width="20px" /> {item.label}
          </strong>
          <p>{item.component}</p>
        </div>
      ))}
    </div>
  );
};

export default LenderHistory;

// import React, { useState, useEffect } from "react";
// import { data } from "../constants/data";
// import DateComponent from "./UTCdatechange-to-indian.js";
// import TimeChangeComponent from "../components/millisec-indian-component.js";
// import "../styles/lender-history.css";

// const LenderHistory = () => {
//   const [expiryTime, setExpiryTime] = useState(null);

//   useEffect(() => {
//     // Fixed duration for expiration, e.g., 7 days in milliseconds
//     const durationInMs = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

//     if (data.purchased_at_ms) {
//       const calculatedExpiryTime = data.purchased_at_ms + durationInMs;
//       setExpiryTime(calculatedExpiryTime); // Set expiration time in milliseconds
//     }
//   }, [data.purchased_at_ms]);

//   return (
//     <div>
//       <div className="history-table">
//         <div className="history">
//           <strong>
//             <img src="/dollaricon.png" alt="icon" width="20px" /> Purchased Plan
//           </strong>
//           <p>
//             <TimeChangeComponent time={data.purchased_at_ms} />
//           </p>
//         </div>

//         <div className="history">
//           <strong>
//             <img src="/personicon.png" alt="icon" width="20px" /> Last opened
//             the app
//           </strong>
//           <p>
//             <DateComponent date={data.last_seen} />
//           </p>
//         </div>

//         {/* Expiry Section */}
//         <div className="history">
//           <strong>
//             <img src="/plusicon.png" alt="icon" width="20px" /> Trial Expired
//           </strong>
//           <p>
//             {expiryTime ? (
//               <TimeChangeComponent time={expiryTime} />
//             ) : (
//               "Calculating..."
//             )}
//           </p>
//         </div>

//         {/* Trial section */}
//         <div className="history">
//           <strong>
//             <img src="/plusicon.png" alt="icon" width="20px" /> Trail Taken
//           </strong>{" "}
//           <span>
//             {" "}
//             {data.product_id
//               ? data.product_id === "rc_promo_professional_weekly"
//                 ? "Professional"
//                 : "Premium"
//               : ""}
//           </span>
//           <p>
//             <TimeChangeComponent time={data.purchased_at_ms} />
//           </p>
//         </div>

//         <div className="history">
//           <strong>
//             <img src="/personicon.png" alt="icon" width="20px" /> First seen
//             using the app
//           </strong>
//           <p>
//             <DateComponent date={data.first_seen} />
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LenderHistory;

