
import React from "react";
import { data } from "../constants/data";
import DateComponent from "../components/UTCtimechange-to-indian";
import "../styles/lender-details.css";


const LenderDetails=()=>{


    const copyToClipboard = (text) => {
       navigator.clipboard
         .writeText(text)
         .then(() => {
           alert(`Copied to clipboard: ${text}`);
         })
         .catch((err) => {
           console.error("Failed to copy: ", err);
         });
    };

    return (
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
    );
}
export default LenderDetails;