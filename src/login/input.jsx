const Input = ({ name, label, value, error, onChange, type }) => {
  return (
    <div className="column">
      <div className="inputBx">
        <label htmlFor={name}>{label}</label>
        <input
          value={value}
          onChange={onChange}
          id={name}
          name={name}
          type={type}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default Input;
