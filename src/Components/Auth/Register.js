import React, { useState ,useContext} from "react";
import firebase from "../../firebase";
import { register } from "../../hooks";


function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const Register = async (e) => {
      try{
        e.preventDefault();
    
        register(name, email, password);
      }catch(err){
        console.error(err);
      }
   
      };
      return (
        <div>
          <form>
            <label>Name</label>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
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
            <button onClick={Register}>Send</button>
          </form>
        </div>
      );
    };

export default Register