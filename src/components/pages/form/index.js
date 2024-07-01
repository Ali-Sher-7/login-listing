import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Form = () => {
  const [data, setData] = useState([
    {
      email: "",
      password: "",
      fname: "",
      lname: "",
      username: "",
      groupId: "",
      department: "",
    },
  ]);
  const [newData, setNewData] = useState({
    groupId: "",
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    department: "",
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [username, setUsername] = useState("");
  // const [groupId, setGroupid] = useState("");
  // const [department, setDepartment] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setData(() => [{ ...newData }]);
    alert("Form SubMitted!!!");
    setNewData({
      groupId: "",
      fname: "",
      lname: "",
      username: "",
      email: "",
      password: "",
      department: "",
    });
  };
  const showData = (e) => {
    setNewData({ ...newData, [e.target.id]: e.target.value });
  };
  const showResponse = () => {};

  return (
    <>
      <Header />
      <section className="form">
        <form className="m-5" onSubmit={handleSubmit}>
          <div className="form-row justify-content-around">
            <div className="form-group col-md-5">
              <label htmlFor="inputFname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="fname"
                placeholder="First Name"
                value={newData.fname}
                onChange={showData}
                required
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="Lname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lname"
                placeholder="Last Name"
                value={newData.lname}
                onChange={showData}
                required
              />
            </div>

            <div className="form-group col-md-5">
              <label htmlFor="inputUsername">User Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="User Name"
                value={newData.username}
                onChange={showData}
                required
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={newData.email}
                onChange={showData}
                required
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={newData.password}
                onChange={showData}
                required
              />
            </div>
            <div class="form-group col-md-5">
              <label for="disabledSelect" class="form-label">
                Group ID
              </label>
              <select
                id="groupId"
                class="form-select"
                value={newData.groupId}
                onChange={showData}
                required
              >
                <option value="" selected>
                  choose...
                </option>
                <option>Group ID 1</option>
                <option>Group ID 2</option>
                <option>Group ID 3</option>
                <option>Group ID 4</option>
              </select>
            </div>
            <div class="form-group col-md-11">
              <label for="disabledSelect" class="form-label">
                Department
              </label>
              <select
                id="department"
                class="form-select"
                value={newData.department}
                onChange={showData}
                required
              >
                <option value="">choose...</option>
                <option>Department 1</option>
                <option>Department 2</option>
                <option>Department 3</option>
                <option>Department 4</option>
              </select>
            </div>
            <div className="form-group col-md-11 mt-2">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={showResponse}
              >
                ADD
              </button>
            </div>
          </div>
        </form>

        <form className="form">
          <div className="form-row justify-content-center">
            <h3>You Enter The Following Data</h3>
            <div className="form-gourp col-md-10">
              <table className="table border">
                <thead>
                  <tr>
                    <th scope="col">GroupID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Department</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.groupId}>
                      <td>{item.groupId}</td>
                      <td>{item.fname}</td>
                      <td>{item.lname}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>{item.username}</td>
                      <td>{item.department}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Form;
