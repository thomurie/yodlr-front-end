import { useState } from "react";
import { CreateUser } from "./helpers";

const SignUp = () => {
  const INITIALFORM = {
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  };

  const labels = {
    email: "Email",
    firstName: "First Name",
    lastName: "Last Name",
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
    console.log(formData);
    CreateUser(formData);
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
      {formData.email && formData.username && formData.password ? (
        <button type="submit">Create User</button>
      ) : (
        <button type="submit" disabled>
          Create User
        </button>
      )}
    </form>
  );
};

export default SignUp;
