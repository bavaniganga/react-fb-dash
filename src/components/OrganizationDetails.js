
import React from "react";
import { data } from "../constants/data";
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

const OrganizationDetails = () => {
  const personaDetails =
    data.loan_data?.data[0]?.[data.original_app_user_id]?.personaDetails;

  const description =
    data.loan_data?.data[0]?.[data.original_app_user_id]?.description;

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



// import React from "react";
// import { data } from "../constants/data";

// const OrganizationDetails =(e)=>{


// const personaDetails =
//   data.loan_data?.data[0]?.[data.original_app_user_id]?.personaDetails;

//   const description =
//     data.loan_data?.data[0]?.[data.original_app_user_id]?.description;

//     return (
//       <div className="organization-details">
//         <h2>Current Usage</h2>
//         <hr />
//         <div>
//           {description ? (
//             <ul>
//               <li>
//                 <strong>Total Active Loans :</strong>{" "}
//                 <span>
//                   {description?.Total_Active_loans
//                     ? description.Total_Active_loans
//                     : "NA"}
//                 </span>
//               </li>
//               <li>
//                 <strong>Active Given Loans :</strong>{" "}
//                 <span>{description?.Active_Given_Loans? description.Active_Given_Loans : "NA"}</span>
//               </li>
//               <li>
//                 <strong>Active Given Flat Loans :</strong>{" "}
//                 <span>
//                   {" "}
//                   <span>{description?.Active_Given_Loans_With_Interest? description.Active_Given_Loans_With_Interest : "NA"}</span>
//                 </span>
//               </li>
//               <li>
//                 <strong>Closed Loans :</strong>{" "}
//                 <span>{description?.Active_Given_Normal_Loans? description?.Active_Given_Normal_Loans :"NA"}</span>
//               </li>
//               <li>
//                 <strong>Loan book size :</strong>{" "}
//                 <span>{description?.LoanBookSize? description.LoanBookSize : "NA"}</span>
//               </li>
//               <li>
//                 <strong>Currency :</strong> <span>{description?.Currency? description.Currency :"NA"}</span>
//               </li>
//               <li>
//                 <strong>Monthly Interest Gain :</strong>{" "}
//                 <span>{description?.MonthlyInterestGain? description.MonthlyInterestGain : "NA"}</span>
//               </li>
//             </ul>
//           ) : (
//             <p>No description data</p>
//           )}
//         </div>
//         <h2>Onboarding Sketching</h2>
//         <hr />
//         <div>
//           {personaDetails ? (
//             <ul>
//               <li>
//                 <strong>Give ControlledAccess :</strong>{" "}
//                 <span>{personaDetails.giveControlledAccess.toString()}</span>
//               </li>
//               <li>
//                 <strong>haveStaffOrPartners :</strong>{" "}
//                 <span>{personaDetails.haveStaffOrPartners.toString()}</span>
//               </li>
//               <li>
//                 <strong>inquiryPurpose :</strong>{" "}
//                 {personaDetails.inquiryPurpose.join(", ")}
//               </li>
//               <li>
//                 <strong>lenderType :</strong>{" "}
//                 <span>{personaDetails.lenderType}</span>
//               </li>
//               <li>
//                 <strong>numberOfCustomers :</strong>{" "}
//                 <span>{personaDetails.numberOfCustomers}</span>
//               </li>
//             </ul>
//           ) : (
//             <p>No Personal Details Found</p>
//           )}
//         </div>
//       </div>
//     );
// }
// export default OrganizationDetails;