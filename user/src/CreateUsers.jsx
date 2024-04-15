import React from "react";
import { useState } from "react";
import axios from "axios";
const CreateUsers = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", { name, email, age })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={submit}>
            <h2>Add User</h2>
            <div>
              <label htmlFor="">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="ENter Nm"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="EMail"
                id=""
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="">Age</label>
              <input
                onChange={(e) => setAge(e.target.value)}
                type="text"
                placeholder="Age"
                id=""
                className="form-control"
              />
            </div>
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUsers;
