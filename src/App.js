import "./App.css";
import React, { useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Button from "@mui/material/Button";
import { IoMdInformationCircle } from "react-icons/io";
import { data } from "./constants/data";
import DateComponent from "./components/UTCtimechange-to-indian";
import TimeChangeComponent from "./components/millisec-indian-component.js";

function App() {

  const[state, setState] = useState("");
  const[quality, setQuality] =useState("");
  const[funnelstage, setFunnelstage] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`Copied to clipboard: ${text}`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }
  const personaDetails =
    data.loan_data?.data[0]?.[data.original_app_user_id]?.personaDetails;

  return (
    <div className="fbdash">
      <header>
        <div className="buttons">
          <button className="back">BACK</button>
          <div className="edit-and-all">
            <button>
              <MdOutlineEdit color="blue" style={{ verticalAlign: "middle" }} />{" "}
              EDIT
            </button>
            <button>
              <MdOutlineDeleteOutline
                color="red"
                style={{ verticalAlign: "middle" }}
              />{" "}
              DELETE
            </button>
            <button>
              <IoMdRefresh color="blue" style={{ verticalAlign: "middle" }} />{" "}
              REFRESH
            </button>
          </div>
        </div>
      </header>

      <div className="lender-detailsbar">
        <div className="name-id">
          <p>
            <strong>{data.name}</strong>
          </p>
          <p>
            {data.mobileNumber}{" "}
            <span>
              <button
                className="phnumber"
                onClick={() => copyToClipboard(data.mobileNumber)}
              >
                Copy
              </button>
            </span>
          </p>
          <p className="id">
            {data.app_user_id}{" "}
            <span>
              <button
                className="userid"
                onClick={() => copyToClipboard(data.app_user_id)}
              >
                Copy
              </button>
            </span>
          </p>
        </div>

        <div>
          <p>
            <strong>Country</strong>
          </p>
          <p>{data.country_code ? data.country_code : "NA"}</p>
        </div>

        <div>
          <p>
            <strong>Lead-type</strong>
          </p>
          <p>{data.lenderType}</p>
        </div>

        <div>
          <p>
            <strong>Price</strong>
          </p>
          <p>{data.price}</p>
        </div>
        <div>
          <p>
            <strong>Last-seen</strong>
          </p>
          <DateComponent date={data.last_seen} />
        </div>
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
        <div>Deal Size</div>
        <div>Team Size</div>

        <Button variant="contained" size="small" className="copy">
          save
        </Button>
      </div>

      <div className="usage-history-details">
        <div className="organization-details">
          <h2>Current Usage</h2>
          <hr />
          <div>
            <ul>
              <li>
                <strong>Total Active Loans :</strong> <span> NA</span>
              </li>
              <li>
                <strong>Active Given Loans :</strong> <span>NA</span>
              </li>
              <li>
                <strong>Active Given Flat Loans :</strong> <span>NA</span>
              </li>
              <li>
                <strong>Closed Loans :</strong> <span>NA</span>
              </li>
              <li>
                <strong>Loan book size :</strong> <span>NA</span>
              </li>
              <li>
                <strong>Currency :</strong> <span>NA</span>
              </li>
              <li>
                <strong>Monthly Interest Gain :</strong> <span>NA</span>
              </li>
            </ul>
          </div>
          <h2>Onboarding Sketching</h2>
          <hr />
          <div>
            {personaDetails ? (
              <ul>
                <li>
                  <strong>Give ControlledAccess :</strong>{" "}
                  <span>{personaDetails.giveControlledAccess.toString()}</span>
                </li>
                <li>
                  <strong>haveStaffOrPartners :</strong>{" "}
                  <span>{personaDetails.haveStaffOrPartners.toString()}</span>
                </li>
                <li>
                  <strong>inquiryPurpose :</strong>{" "}
                  {personaDetails.inquiryPurpose.join(", ")}
                </li>
                <li>
                  <strong>lenderType :</strong>{" "}
                  <span>{personaDetails.lenderType}</span>
                </li>
                <li>
                  <strong>numberOfCustomers :</strong>{" "}
                  <span>{personaDetails.numberOfCustomers}</span>
                </li>
              </ul>
            ) : (
              <p>No Persona Details Found</p>
            )}
          </div>
        </div>

        <div className="customer-history">
          <h2>
            Customer History{" "}
            <IoMdInformationCircle
              color="gray"
              style={{ verticalAlign: "middle" }}
            />
          </h2>
          <hr />
          <div className="history-table">
            <div className="history">
              <strong>
                <img src="/dollaricon.png" alt="icon" width="20px" /> Purchased
                a {data.entitlement_id} plan
              </strong>
              <p>
                <DateComponent
                  date={data.entitlements.professional.purchase_date}
                />
              </p>
            </div>

            <div className="history">
              <strong>
                <img src="/dollaricon.png" alt="icon" width="20px" /> premium
                subscription
              </strong>
              <p> date</p>
            </div>

            <div className="history">
              <strong>
                <img src="/personicon.png" alt="icon" width="20px" /> Last
                opened the app
              </strong>

              <p>
                <DateComponent date={data.last_seen} />{" "}
              </p>
            </div>

            <div className="history">
              <strong>
                <img src="/plusicon.png" alt="icon" width="20px" /> Trail
                Expired
              </strong>
              <p> date</p>
            </div>
            <div className="history">
              <strong>
                <img src="/plusicon.png" alt="icon" width="20px" /> Trail Taken
              </strong>{" "}
              {data.product_id
                ? data.product_id === "rc_promo_professional_weekly"
                  ? "Professional"
                  : "Premium"
                : ""}
              <p>
                <TimeChangeComponent time={data.purchased_at_ms} />
              </p>
            </div>
            <div className="history">
              <strong>
                <img src="/personicon.png" alt="icon" width="20px" /> First seen
                using the app
              </strong>
              <p>
                <DateComponent date={data.first_seen} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
