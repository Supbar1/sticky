import { useState } from "react";
import Input from "./input";
import Joi from "joi-browser";
import "./login.css";

export default function Login() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  function validate() {
    const result = Joi.validate(account, schema, { abortEarly: false });
    if (!result.error) return null;
    const validateErrors = {};
    for (let item of result.error.details)
      validateErrors[item.path[0]] = item.message;

    return validateErrors;
  }

  const handleSubmit = (e) => {
    // function that prevents full page reload
    e.preventDefault();
    const submitErrors = validate();
    setErrors(submitErrors || {});
    console.log(submitErrors);
    if (!errors) return;
  };

  function validateProperty({ name, value }) {
    //Computed Property Name in JavaScript
    const obj = { [name]: value };
    const actualSchema = { [name]: schema[name] };
    console.log(schema[name], name);
    const { error } = Joi.validate(obj, actualSchema);
    return error ? error.details[0].message : null;
  }

  const handleChange = ({ currentTarget: input }) => {
    const validateErrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) {
      validateErrors[input.name] = errorMessage;
    } else {
      delete validateErrors[input.name];
    }

    const newAccount = { ...account };
    newAccount[input.name] = input.value;
    setErrors(validateErrors);
    setAccount(newAccount);
  };
  return (
    <div className="login">
      <div className="imgBx">
        <img src="https://www.woodtoolsanddeco.com/10220-large_default/set-of-200-wooden-sticks-square-40x40-mm-38-cm-length-birch-wood.jpg"></img>
      </div>
      <div className="contentBx">
        <div className="formBx">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <Input
              name="username"
              value={account.username}
              label="Username"
              onChange={handleChange}
              type="text"
              error={errors.username}
              autoFocus
            />
            <Input
              name="password"
              value={account.password}
              label="Password"
              onChange={handleChange}
              type="password"
              error={errors.password}
            />

            <div className="remember">
              <label>
                <input type="checkbox" name="" />
                Remember me
              </label>
            </div>
            <div className="inputBx">
              <span>Password</span>
              <button disabled={validate()} className="button">
                Sign in
              </button>
            </div>
            <div className="inputBx">
              <p>
                Don't have an account? <a href="#">Sign up</a>
              </p>
            </div>
          </form>
          <h3>Login with social media</h3>
          <ul className="sci">
            <li>
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a aria-label="twitter" href="https://www.twitter.com/">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a aria-label="instagram" href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
