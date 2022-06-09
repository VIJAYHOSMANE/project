import React, { useEffect, useState } from "react";
import Sidebar from "../Helpers/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import "./CustomerDetails.css";
import { Button } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditUser from "../components/users/EditUser";
// import "../node_modules/bootstrap/scss/bootstrap";

const editButton = (e: any) => {
  return <Button variant="contained">Edit</Button>;
};

function CustomerDetails() {
  const [tableData, setTableData] = useState<any[]>([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((data) => data.json())
  //     .then((data) => setTableData(data));
  // });
  useEffect(() => {
    loadUsers();
  });
  const loadUsers = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setTableData(result.data);
  };
  const deleteUser = async (id: any) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    loadUsers();
    console.log(`deleted${id}`);
  };
  return (
    <div>
      <div className="table">
        <h2
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "25rem",
          }}
        >
          Customer Details
        </h2>

        <table className="table">
          <thead className="thead-dark">
            <tr style={{ color: "white" }}>
              <th scope="col">id</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Address</th>
              <th scope="col">Age</th>
              <th scope="col">Adhaar Id</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((user, index): any => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td width={300}>{user.address.city}</td>
                {/* <td>{user.null}</td> */}
                <td>{user.null}</td>
                <td>{user.null}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/EditUser/${user.id}`}>
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                  </Link>
                </td>
                <td>
                  <Link
                    to="/CustomerDetails"
                    onClick={() => deleteUser(user.id)}
                  >
                    <Button
                      variant="contained"
                      startIcon={<DeleteIcon />}
                      color="error"
                    >
                      Delete
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="addbutton" to="/AddUser">
          <Button variant="contained" component="span">
            Add User
          </Button>
        </Link>
      </div>

      <Sidebar />
    </div>
  );
}

export default CustomerDetails;
