import "./styles/app.css";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { IoMdInformationCircle } from "react-icons/io";
import LenderDetails from "./components/LenderDetails.js";
import LenderHistory from "./components/LenderHistory.js";
import Topnavbar from "./components/HeaderComponent.js";
import OrganizationDetails from "./components/OrganizationDetails.js";
import DropdownSelect from "./components/DropdownSelect.js";

function App() {
  const [state, setState] = useState("");
  const [quality, setQuality] = useState("");
  const [funnelstage, setFunnelstage] = useState("");
  const [dealsize, setDealsize] = useState("");
  const [teamsize, setTeamsize] = useState("");
  const [userId, setUserId] = useState("");
  const [data, setData] = useState(null);
  console.log({ data });

  const [customersDetails, setCustomersDetails] = useState();
  const [loading, setLoading] = useState(false); // Added `loading` state

  const stateOptions = [
    { value: "Todo", label: "Todo" },
    { value: "Nurture", label: "Nurture" },
    { value: "Disqualified", label: "Disqualified" },
    { value: "Inactive", label: "Inactive" },
    { value: "Upsell", label: "Upsell" },
    { value: "Won", label: "Won" },
    { value: "PaymentMissing", label: "Payment Missing" },
  ];

  const qualityOptions = [
    { value: "Unsure", label: "Unsure" },
    { value: "Prem", label: "Prem" },
    { value: "Prof", label: "Prof" },
    { value: "Team", label: "Team" },
    { value: "Spam", label: "Spam" },
  ];

  const funnelStage = [
    { value: "ToFu", label: "ToFu" },
    { value: "MoFu", label: "MoFu" },
    { value: "BoFu", label: "BoFu" },
    { value: "Closed", label: "Closed" },
    { value: "InActive", label: "Inactive" },
  ];

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://fb-sales-dashboard-backend.onrender.com/api/v1/sales/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ey5JhbGciOiJ85IUz3I1NiI34sInR5cC`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to fetch data: ${response.status} - ${errorText}`
        );
      }

      const result = await response.json();
      const res = Array.isArray(result) ? result : [result];
      console.log(res[0]);

      setData(res[0]);

      setCustomersDetails(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getUserDataById = (userId) => {
    console.log("userid_55", userId);

    if (!userId) {
      return null;
    }
    const userData = customersDetails.find(
      (user) => user.app_user_id === userId
    );
    console.log({ userData });

    setData(userData);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleUserSubmit = async () => {
    if (!userId.trim()) {
      alert("Please enter a valid User ID");
      return;
    }
    setLoading(true);
    try {
      getUserDataById(userId);
    } catch (error) {
      console.error("Error handling user submit:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fbdash">
      <div className="user">
        <input
          className="useridinput"
          name="userid"
          placeholder="Enter User Id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button className="subbtn" onClick={handleUserSubmit}>
          Submit
        </button>
      </div>
      {loading && <p>Loading...</p>}
      <div>
        <header>
          <Topnavbar />
        </header>

        <div className="lender-details">
          <LenderDetails userId={userId} data={data} />
        </div>

        <div className="usagebar">
          <div>
            <DropdownSelect
              defaultLabel="Set State"
              value={state}
              onChange={(e) => setState(e)}
              options={stateOptions}
            />
          </div>
          <div>
            <DropdownSelect
              defaultLabel="Set Quality"
              value={quality}
              onChange={(e) => setQuality(e)}
              options={qualityOptions}
            />
          </div>
          <div>
            <DropdownSelect
              defaultLabel="Funnel stage"
              value={funnelstage}
              onChange={(e) => setFunnelstage(e)}
              options={funnelStage}
            />
          </div>
          <div>
            <input
              value={dealsize}
              onChange={(e) => setDealsize(e.target.value)}
              required
              placeholder="Deal Size"
            />
          </div>
          <div>
            <input
              value={teamsize}
              onChange={(e) => setTeamsize(e.target.value)}
              required
              placeholder="Team Size"
            />
          </div>

          <Button variant="contained" size="small" className="copy">
            Save
          </Button>
        </div>

        <div className="usage-history-details">
          <OrganizationDetails userId={userId} data={data} />

          <div className="customer-history">
            <h2>
              Customer History{" "}
              <IoMdInformationCircle
                color="gray"
                style={{ verticalAlign: "middle" }}
              />
            </h2>
            <hr />
            <div>
              <LenderHistory data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
