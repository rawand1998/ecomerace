import React, { useState ,useEffect} from "react";
import firebase from "../../../firebase";
import { register } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import './Style.css'
function Register() {
  const intialValues = { name:"",email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
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
    if (!values.name) {
      errors.name = "Cannot be blank";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      Register();
    }
  }, [formErrors]);
    const Register = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
        register(formValues);
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
            <input  value={formValues.name}  placeholder="Email Address"  name="name"
          onChange={handleChange} />
            {formErrors.email && (
            <p className="error">{formErrors.name}</p>
          )}
          </div>
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
          {formErrors.email && (
            <p className="error">{formErrors.password}</p>
          )}
          </div>
         
        </div>
        <div className="login-footer">
      
          <button className="submit-btn3" onClick={Register}>Register </button>
        </div>
      </div>
      </div>

    
    </div>
      );
    };

export default Register