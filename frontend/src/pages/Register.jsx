import { useState } from "react";
import { registerUser } from "../services/authService";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await registerUser(formData);
      alert("Registration Successful!");
      console.log(data);
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;