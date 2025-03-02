import React, { useState, useEffect } from "react";
// import { data } from "../constants/data.js";
import DateComponent from "./UTCdatechangeToIndian.js";
import TimeChangeComponent from "./MillisecTimeChangeComponent.js";
import "../styles/lender-history.css";

const LenderHistory = (data) => {
  // const [customerDetailsResponse, setCustomerDetailsResponse] =
  //   useState(undefined);
  // // const [firstItem, setFirstItem] = useState(undefined);
  const [historyItems, setHistoryItems] = useState([]);
  // const [isLoading, setLoading] = useState(false);

  // const getHistory = async () => {
  //   // Fetch API call
  //   // Check if it is success or failure
  //   // update historyItems using set method
  //   setLoading(true);
  //   const response = await fetch(
  //     "https://fb-sales-dashboard-backend.onrender.com/api/v1/sales/",
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ey5JhbGciOiJ85IUz3I1NiI34sInR5cC`,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   if (!response.ok) {
  //     // Handle error
  //     setLoading(false);
  //     return;
  //   }
  //   const json = await response.json();
  //   setCustomerDetailsResponse(json); 
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getHistory();
  // }, []);

  const prepareAndSetHistoryItems = (data) => {
    const durationInMs = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    const expiryTime = data.expiration_at_ms
      ? data.expiration_at_ms
      : data.purchased_at_ms + durationInMs;

    // Create an array of history items
    const items = [
      {
        id: "purchased",
        label: "rc_professional_weekly",
        icon: "/dollaricon.png",
        timeMillis: data.purchased_at_ms,
        component: <TimeChangeComponent time={data.purchased_at_ms} />,
      },
      {
        id: "last_opened",
        label: "Last opened the app",
        icon: "/personicon.png",
        timeMillis: new Date(data.last_seen).getTime(),
        component: data.last_seen ? (
          <TimeChangeComponent time={new Date(data.last_seen).getTime()} />
        ) : (
          "No data available"
        ),
      },
      {
        id: "trial_expired",
        label: "Trial Expired",
        icon: "/plusicon.png",
        timeMillis: expiryTime,
        component: expiryTime ? (
          <TimeChangeComponent time={expiryTime} />
        ) : (
          "No data available"
        ),
      },
      {
        id: "trial_taken",
        label: "Trial Taken",
        icon: "/plusicon.png",
        timeMillis: data.purchased_at_ms,
        component: <TimeChangeComponent time={data.purchased_at_ms} />,
      },
      {
        id: "first_seen",
        label: "First seen using the app",
        icon: "/personicon.png",
        timeMillis: new Date(data.first_seen).getTime(),
        component: data.first_seen ? (
          <TimeChangeComponent time={new Date(data.first_seen).getTime()} />
        ) : (
          "No data available"
        ),
      },
    ];

    const sortedItems = items.sort((a, b) => {
      return (b.timeMillis || 0) - (a.timeMillis || 0);
    });

    console.log("sortedItems_001", sortedItems);

    const itemsWithUniqueKeys = sortedItems.map((item, index) => ({
      ...item,
      key: `${item.id}-${item.time}-${index}`,
    }));

    setHistoryItems(itemsWithUniqueKeys);
  };

  useEffect(() => {
    if (data) {
      prepareAndSetHistoryItems(data);
    }
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
