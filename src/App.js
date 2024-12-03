// import "./App.css";
import "./styles/app.css";
import React, { useState } from "react";
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

  return (
    <div className="fbdash">
      <header>
        <Topnavbar />
      </header>

      <div className="lender-details">
        <LenderDetails />
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
