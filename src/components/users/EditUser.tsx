import { Button, Container, TextField } from "@mui/material";
import axios from "axios";

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./AddUser.css";

function EditUser() {
  let history = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    address: "",
    age: "",
    adhaarid: "",
    phone: "",
  });
  //   const { address, age, adhaarid, mobile } = user;
  //   const onInputChange = (e: any) => {
  //     console.log(e.target.value);
  //     e.preventDefault();

  //     // setUser({ ...user, [e.target.name]: e.target.value });
  //   };
  const onSubmit = (e: any) => {
    e.preventDefault();
    alert("Enter the details");
  };
  useEffect(() => {
    loadUser();
  }, []);
  //   const onClicking = async (e: any) => {
  //     await axios.post("https://jsonplaceholder.typicode.com/users", user);
  //     history.push("/CustomerDetails");
  //   };
  const loadUser = async () => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(result.data);
    console.log(result);
  };
  return (
    <Container>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="addUser">
          <div className="userinputs">
            <h2>Edit User</h2>

            <TextField
              required
              id="outlined-required"
              label="Customer Name"
              style={{ width: "500px" }}
              value={user.name}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
                console.log(user);
              }}
            />
            <br></br>
            <TextField
              required
              id="outlined-basic"
              label="Address"
              value={user.address}
              onChange={(e) => {
                setUser({ ...user, address: e.target.value });
                console.log(user);
              }}
            />
            <br></br>
            <TextField
              required
              type="number"
              id="outlined-required"
              label="Age"
              value={user.age}
              onChange={(e) => {
                setUser({ ...user, age: e.target.value });
                console.log(user.age.length);
              }}
            />
            <br></br>
            <TextField
              required
              type="number"
              id="outlined-required"
              label="Adhaar Id"
              value={user.adhaarid}
              onChange={(e) => {
                setUser({ ...user, adhaarid: e.target.value });
                console.log(user);
              }}
            />
            <br></br>
            <TextField
              required
              //type="number"
              id="outlined-required"
              label="Mobile Number"
              value={user.phone}
              onChange={(e) => {
                setUser({ ...user, phone: e.target.value });
                console.log(user);
              }}
            />
            <br></br>

            {(user.name.length &&
              user.address.length &&
              user.age.length &&
              user.adhaarid.length &&
              user.phone.length) == 0 && (
              <Button
                variant="contained"
                component="span"
                onClick={(e: any) => onSubmit(e)}
              >
                Add User
              </Button>
            )}

            {(user.name.length &&
              user.address.length &&
              user.age.length &&
              user.adhaarid.length &&
              user.phone.length) !== 0 && (
              <Link to="/CustomerDetails">
                <Button
                  variant="contained"
                  component="span"
                  style={{ width: "500px" }}
                >
                  Update User
                </Button>
              </Link>
            )}
          </div>
        </div>
      </form>
      {/* </div> */}
    </Container>
  );
}
export default EditUser;
