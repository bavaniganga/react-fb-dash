import React from "react";
// import { data } from "../constants/data";
// import "../styles/organization-details.css";

const DetailCard = ({ title, details }) => (
  <div className="detail-card">
    <h2>{title}</h2>
    <hr />
    {details ? (
      <ul>
        {details.map((item, index) => (
          <li key={index}>
            <strong>{item.label}:</strong>{" "}
            <span>{item.value !== undefined ? item.value : "NA"}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p>No data available</p>
    )}
  </div>
);

const OrganizationDetails = (data) => {
  const personaDetails =
    data?.loan_data?.data[0]?.[data.app_user_id]?.personaDetails;

  const description = data?.loan_data?.data[0]?.[data.app_user_id]?.description;

  const descriptionDetails = description
    ? [
        { label: "Total Active Loans", value: description.Total_Active_loans },
        { label: "Active Given Loans", value: description.Active_Given_Loans },
        {
          label: "Active Given Flat Loans",
          value: description.Active_Given_Loans_With_Interest,
        },
        { label: "Closed Loans", value: description.Active_Given_Normal_Loans },
        { label: "Loan Book Size", value: description.LoanBookSize },
        { label: "Currency", value: description.Currency },
        {
          label: "Monthly Interest Gain",
          value: description.MonthlyInterestGain,
        },
      ]
    : null;

  const personaDetailsData = personaDetails
    ? [
        {
          label: "Give Controlled Access",
          value: personaDetails.giveControlledAccess.toString(),
        },
        {
          label: "Have Staff Or Partners",
          value: personaDetails.haveStaffOrPartners.toString(),
        },
        {
          label: "Inquiry Purpose",
          value: personaDetails.inquiryPurpose.join(", "),
        },
        { label: "Lender Type", value: personaDetails.lenderType },
        {
          label: "Number Of Customers",
          value: personaDetails.numberOfCustomers,
        },
      ]
    : null;

  return (
    <div className="organization-details">
      <DetailCard title="Current Usage" details={descriptionDetails} />
      <DetailCard title="Onboarding Sketching" details={personaDetailsData} />
    </div>
  );
};

export default OrganizationDetails;
