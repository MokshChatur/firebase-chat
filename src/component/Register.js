import React, { useState } from "react";
import add from "../image/avatar.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import 'firebase/auth';


function Register() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setMail] = useState();
  const [file, setFile] = useState();
  const [err, setErr] = useState(false)
  const handleSubmit = async () => {
    debugger;
    console.log("name", name, password, email, file);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
      setErr(true)
    }
  };
 

  
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Moksh Chat box</span>
          <span className="title">Register</span>
          <form className="form-signup" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setMail(e.target.value)}
            />
            <input
              className="input"
              type="password"
              value={password}
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <input
              style={{ display: "none" }}
              type="file"
              id="file"
              value={file}
              onChange={(e) => setFile(e.target.files)}
            />
            <label className="file" htmlFor="file">
              <img style={{ width: "35px" }} alt="" src={add} />
              <span>Add an avatar</span>
            </label> */}
            <button className="signup">Sign Up</button>
            {err & <span>Something wet Wrong</span>}
          </form>
          <p>Do you have an account ? or SignIn</p>
        </div>
      </div>
    </>
  );
          }

export default Register;
