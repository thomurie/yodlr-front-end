import { useState } from "react";
import { GetUser } from "./helpers";

const SingIn = () => {
  const INITIALFORM = {
    id: "",
    username: "",
    password: "",
  };

  const labels = {
    id: "ID",
    username: "Username",
    password: "Password",
  };
  const [formData, setFormData] = useState(INITIALFORM);

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    GetUser(formData);
    setFormData(INITIALFORM);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((k) => (
        <>
          <label htmlFor={k}>{labels[k]}</label>
          <input
            type={k === "password" ? "password" : "text"}
            name={k}
            id={k}
            value={formData[k]}
            onChange={handleChange}
          ></input>
        </>
      ))}
      {formData.username && formData.password ? (
        <button type="submit">Sign In</button>
      ) : (
        <button type="submit" disabled>
          Sign In
        </button>
      )}
    </form>
  );
};

export default SingIn;
