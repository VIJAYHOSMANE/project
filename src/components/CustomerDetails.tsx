import React, { useEffect, useState } from "react";
import Sidebar from "../Helpers/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import "./CustomerDetails.css";

const coloumns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Customer Name", width: 200 },
  // {field:'age',headerName:'Age'},
  { field: "address", headerName: "Address", width: 300 },
  { field: "phone", headerName: "Mobile no.", width: 300 },
];
function CustomerDetails() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  });
  return (
    <div>
      <div className="table">
        <h2
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Customer Details
        </h2>
        <DataGrid
          rows={tableData}
          columns={coloumns}
          pageSize={10}
          checkboxSelection
        />
      </div>

      <Sidebar />
    </div>
  );
}

export default CustomerDetails;
