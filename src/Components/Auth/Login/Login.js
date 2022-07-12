import React, { useState,useEffect } from "react";
import firebase from "../../../firebase";
import { login } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  let navigate = useNavigate();
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      Login();
    }
  }, [formErrors]);
  const Login = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
    login(formValues);
    // navigate('/')
  };
  return (
    <div className="login-pg">
      <div className="login-form-area">
        <div className="login-form">
        <div className="login-heading">
          <span>Login</span>
          <p>Enter Login details to get access</p>
          {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className="success-msg">Form submitted successfully</span>
      )}
        </div>
        <div className="login-box">
          <div className="single-input-feilds">
            <label for="">Email Address</label>
            <input  value={formValues.email}  placeholder="Email Address" name="email"
          onChange={handleChange} />
            {formErrors.email && (
            <p className="error">{formErrors.email}</p>
          )}
          </div>
          <div  className="single-input-feilds">
          <label>Password</label>
        <input
          type="password"
          placeholder="Email Address"
          value={formValues.password}
          onChange={handleChange}
          name="password"
        />
          {formErrors.password && (
            <p className="error">{formErrors.password}</p>
          )}
          </div>
         
        </div>
        <div className="login-footer">
          <p> Don’t have an account? <Link to="/register">Sign Up</Link></p>
          <button className="submit-btn3" onClick={Login}>Login </button>
        </div>
      </div>
      </div>

    
    </div>
  );
};

export default Login;