import React from "react";
import { data } from "../constants/data";
import DateComponent from "../components/UTCtimechange-to-indian";
import TimeChangeComponent from "../components/millisec-indian-component.js";
import "../styles/lender-history.css";
 

const LenderHistory = () =>{

    return (
      <div>
        <div className="history-table">
          <div className="history">
            <strong>
              <img src="/dollaricon.png" alt="icon" width="20px" /> Purchased a{" "}
              {data.entitlement_id} plan
            </strong>
            <p>
              <DateComponent
                date={data.entitlements.professional.purchase_date}
              />
            </p>
          </div>

          <div className="history">
            <strong>
              <img src="/dollaricon.png" alt="icon" width="20px" /> Premium
              subscription
            </strong>
            <p>date</p>
          </div>

          <div className="history">
            <strong>
              <img src="/personicon.png" alt="icon" width="20px" /> Last opened
              the app
            </strong>
            <p>
              <DateComponent date={data.last_seen} />
            </p>
          </div>

          {/* Trail Expired Section */}

          <div className="history">
            <strong>
              <img src="/plusicon.png" alt="icon" width="20px" /> Trail Expired
            </strong>
            
            <p>
              <DateComponent date={data.trial_expired_date} />
            </p>
          </div>

          {/* Trail Taken Section */}

          <div className="history">
            <strong>
              <img src="/plusicon.png" alt="icon" width="20px" /> Trail Taken
            </strong>{" "}
            <span>
              {" "}
              {data.product_id
                ? data.product_id === "rc_promo_professional_weekly"
                  ? "Professional"
                  : "Premium"
                : ""}
            </span>
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
    );
}
export default LenderHistory;