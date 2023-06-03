import React from "react";
import ReactApexChart from "react-apexcharts";

export const COLUMNS:any = [
  {
    Header: "ID",
    accessor: "IdRef",
    className: "text-center ",
  },
  {
    Header: "Status",
    accessor: "Status",
    className: "text-center ",
  },
  {
    Header: "Duration",
    accessor: "Duration",
    className: "text-center ",
  },
  {
    Header: "Payment Method",
    accessor: "PaymentMethod",
    className: "text-center ",
  },
  {
    Header: "Payment Status",
    accessor: "PaymentStatus",
    className: "text-center ",
  },
  {
    Header: "Start Date",
    accessor: "StartDate",
    className: "text-center ",
  },
  {
    Header: "End Date",
    accessor: "EndDate",
    className: "text-center ",
  },
];

export const Data = [
  {
    IdRef: 'asfaji9182509',
    Duration: 'asjijasivhi',
    PaymentMethod: 'asivjhiahniv',
    PaymentStatus: 'asjiojiaoji',
    StartDate: 'askiaiv',
    EndDate: 'askjijias'
  },
  {
    IdRef: 'asfaji9182509',
    Duration: 'asjijasivhi',
    PaymentMethod: 'asivjhiahniv',
    PaymentStatus: 'asjiojiaoji',
    StartDate: 'askiaiv',
    EndDate: 'askjijias'
  },
  {
    IdRef: 'asfaji9182509',
    Duration: 'asjijasivhi',
    PaymentMethod: 'asivjhiahniv',
    PaymentStatus: 'asjiojiaoji',
    StartDate: 'askiaiv',
    EndDate: 'askjijias'
  },
  {
    IdRef: 'asfaji9182509',
    Duration: 'asjijasivhi',
    PaymentMethod: 'asivjhiahniv',
    PaymentStatus: 'asjiojiaoji',
    StartDate: 'askiaiv',
    EndDate: 'askjijias'
  },
  {
    IdRef: 'asfaji9182509',
    Duration: 'asjijasivhi',
    PaymentMethod: 'asivjhiahniv',
    PaymentStatus: 'asjiojiaoji',
    StartDate: 'askiaiv',
    EndDate: 'askjijias'
  },
  {
    IdRef: 'asfaji9182509',
    Duration: 'asjijasivhi',
    PaymentMethod: 'asivjhiahniv',
    PaymentStatus: 'asjiojiaoji',
    StartDate: 'askiaiv',
    EndDate: 'askjijias'
  },
  {
    IdRef: 'asfaji9182509',
    Duration: 'asjijasivhi',
    PaymentMethod: 'asivjhiahniv',
    PaymentStatus: 'asjiojiaoji',
    StartDate: 'askiaiv',
    EndDate: 'askjijias'
  },
  {
    IdRef: 'asfaji9182509',
    Duration: 'asjijasivhi',
    PaymentMethod: 'asivjhiahniv',
    PaymentStatus: 'asjiojiaoji',
    StartDate: 'askiaiv',
    EndDate: 'askjijias'
  },
  {
    IdRef: 'asfaji9182509',
    Duration: 'asjijasivhi',
    PaymentMethod: 'asivjhiahniv',
    PaymentStatus: 'asjiojiaoji',
    StartDate: 'askiaiv',
    EndDate: 'askjijias'
  },
  {
    IdRef: 'asfaji9182509',
    Duration: 'asjijasivhi',
    PaymentMethod: 'asivjhiahniv',
    PaymentStatus: 'asjiojiaoji',
    StartDate: 'askiaiv',
    EndDate: 'askjijias'
  },
  {
    IdRef: 'asfaji9182509',
    Duration: 'asjijasivhi',
    PaymentMethod: 'asivjhiahniv',
    PaymentStatus: 'asjiojiaoji',
    StartDate: 'askiaiv',
    EndDate: 'askjijias'
  },
  {
    IdRef: 'asfaji9182509',
    Duration: 'asjijasivhi',
    PaymentMethod: 'asivjhiahniv',
    PaymentStatus: 'asjiojiaoji',
    StartDate: 'askiaiv',
    EndDate: 'askjijias'
  },
  {
    IdRef: 'asfaji9182509',
    Duration: 'asjijasivhi',
    PaymentMethod: 'asivjhiahniv',
    PaymentStatus: 'asjiojiaoji',
    StartDate: 'askiaiv',
    EndDate: 'askjijias'
  },
  {
    IdRef: 'asfaji9182509',
    Duration: 'asjijasivhi',
    PaymentMethod: 'asivjhiahniv',
    PaymentStatus: 'asjiojiaoji',
    StartDate: 'askiaiv',
    EndDate: 'askjijias'
  }
];


export const GlobalFilter = ({ filter, setFilter }:any) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};

