import React, { useState ,useContext} from "react";
import firebase from "../../firebase";
import { register } from "../../hooks";
import { useNavigate } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    let navigate = useNavigate();
    const Register = (e) => {
        e.preventDefault();
    
        register(name, email, password);
        navigate('/')
      };
      return (
       
         <div className="login-pg">
      <div className="login-form-area">
        <div className="login-form">
        <div className="login-heading">
          <span>Login</span>
          <p>Enter Login details to get access</p>
        </div>
        <div className="login-box">
        <div className="single-input-feilds">
            <label for="">Username </label>
            <input  value={name}  placeholder="Email Address"
          onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="single-input-feilds">
            <label for="">Email Address</label>
            <input  value={email}  placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div  className="single-input-feilds">
          <label>Password</label>
        <input
          type="password"
          placeholder="Email Address"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          </div>
         
        </div>
        <div className="login-footer">
          {/* <p> Don’t have an account? <Link to="/register">Sign Up</Link></p> */}
          <button className="submit-btn3" onClick={Register}>Register </button>
        </div>
      </div>
      </div>

    
    </div>
      );
    };

export default Register