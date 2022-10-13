import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Login.css";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [data,setData] = useState("");
  const [error,setError] = useState("");
  useEffect(()=>{
    // fetch("https://e7gezli.herokuapp.com/lala")
    // .then((res)=>res.json())
    // .then((res)=>setData(res)
    // .catch((err)=>setError(err))
    // )
    const dummyData={
      "userName":"Alyeldeen",
      "password":"ZombyMangooooooz"
    };
    axios.post('https://e7gezli.herokuapp.com/lala' ,dummyData)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error.response)
        })
        console.log(JSON.stringify(data))
  },[])
  console.log(data);
  return (
    <div className="main">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
