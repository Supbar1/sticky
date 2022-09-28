import Joi from "joi-browser";
import Input from "./input";
import Buttons from "./Buttons";

const Form = ({
  username,
  usernameErrors,
  password,
  passwordErrors,
  account,
  schema,
  setErrors,
  errors,
  setAccount,
}) => {
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
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          value={username}
          label="Username"
          onChange={handleChange}
          type="text"
          error={usernameErrors}
          autoFocus
        />
        <Input
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
          type="password"
          error={passwordErrors}
        />
        <Buttons />
      </form>
    </>
  );
};
export default Form;
