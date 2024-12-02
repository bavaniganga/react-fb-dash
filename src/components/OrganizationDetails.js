import React from "react";
import { data } from "../constants/data";

const OrganizationDetails =(e)=>{


const personaDetails =
  data.loan_data?.data[0]?.[data.original_app_user_id]?.personaDetails;

  const description =
    data.loan_data?.data[0]?.[data.original_app_user_id]?.description;

    return (
      <div className="organization-details">
        <h2>Current Usage</h2>
        <hr />
        <div>
          {description ? (
            <ul>
              <li>
                <strong>Total Active Loans :</strong>{" "}
                <span>
                  {description?.Total_Active_loans
                    ? description.Total_Active_loans
                    : "NA"}
                </span>
              </li>
              <li>
                <strong>Active Given Loans :</strong>{" "}
                <span>{description?.Active_Given_Loans? description.Active_Given_Loans : "NA"}</span>
              </li>
              <li>
                <strong>Active Given Flat Loans :</strong>{" "}
                <span>
                  {" "}
                  <span>{description?.Active_Given_Loans_With_Interest? description.Active_Given_Loans_With_Interest : "NA"}</span>
                </span>
              </li>
              <li>
                <strong>Closed Loans :</strong>{" "}
                <span>{description?.Active_Given_Normal_Loans? description?.Active_Given_Normal_Loans :"NA"}</span>
              </li>
              <li>
                <strong>Loan book size :</strong>{" "}
                <span>{description?.LoanBookSize? description.LoanBookSize : "NA"}</span>
              </li>
              <li>
                <strong>Currency :</strong> <span>{description?.Currency? description.Currency :"NA"}</span>
              </li>
              <li>
                <strong>Monthly Interest Gain :</strong>{" "}
                <span>{description?.MonthlyInterestGain? description.MonthlyInterestGain : "NA"}</span>
              </li>
            </ul>
          ) : (
            <p>No description data</p>
          )}
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
            <p>No Personal Details Found</p>
          )}
        </div>
      </div>
    );
}
export default OrganizationDetails;