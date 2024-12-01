// import "./App.css";
import "./styles/app.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoMdInformationCircle } from "react-icons/io";
import { data } from "./constants/data";
import DateComponent from "./components/UTCdatechange-to-indian.js";
import TimeChangeComponent from "./components/millisec-indian-component.js";
import LenderDetails from "./components/lender-details";
import LenderHistory from "./components/lender-history.js";
import HeaderComponent from "./components/headercomponent.js";
import OrganizationDetails from "./components/organization-details.js";

function App() {
  const [state, setState] = useState("");
  const [quality, setQuality] = useState("");
  const [funnelstage, setFunnelstage] = useState("");
  const [dealsize, setDealsize] = useState("");
  const [teamsize, setTeamsize] = useState("");

  // const personaDetails =
  //   data.loan_data?.data[0]?.[data.original_app_user_id]?.personaDetails;

  return (
    <div className="fbdash">
      <header>
        <HeaderComponent />
      </header>

      <div className="lender-details">
        <LenderDetails />
      </div>

      <div className="usagebar">
        <div>
          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option>Set State</option>
            <option> Todo</option>
            <option>Nurture</option>
            <option>Disqualified</option>
            <option>Inactive</option>
            <option>Upsell</option>
            <option>Won</option>
            <option>PaymentMissing</option>
          </select>
        </div>
        <div>
          <select value={quality} onChange={(e) => setQuality(e.target.value)}>
            <option>Set Quality</option>
            <option>Unsure</option>
            <option>Prem</option>
            <option>Prof</option>
            <option>Team</option>
            <option>Spam</option>
          </select>
        </div>
        <div>
          <select
            value={funnelstage}
            onChange={(e) => setFunnelstage(e.target.value)}
          >
            <option>Funnel stage</option>
            <option>ToFu</option>
            <option>MoFu</option>
            <option>BoFu</option>
            <option>Closed</option>
            <option>InActive</option>
          </select>
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
          save
        </Button>
      </div>

      <div className="usage-history-details">
        
        <OrganizationDetails />

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
            <LenderHistory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
