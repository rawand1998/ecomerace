import React, { useState } from "react";
import firebase from "../../firebase";
import { login } from "../../hooks";
import { checkEmail } from "../../hooks";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const Login =async (e) => {
    try{
      
      e.preventDefault();
        
      login(email, password);
      navigate('/')
    }catch(err){
      console.log(err);
    }
  
  };
  return (
    <div>
      <form>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Email Address"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={Login}>Send</button>
      </form>
    </div>
  );
};

export default Login;