export default function NewLogin() {
  return (
    <>
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input autoFocus type="text" id="name" />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password:</label>
        <input type="password" />
      </fieldset>
      <button type="submit">Login</button>
    </>
  );
}
