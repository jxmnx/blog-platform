import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
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
      await registerUser(formData);

      alert("Registration Successful!");

      navigate("/login");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="auth-card">
      <h2 className="text-center mb-4">
        Create Account ✨
      </h2>

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
          placeholder="Email Address"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <div className="input-group mb-4">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Password"
    className="form-control"
    onChange={handleChange}
  />

  <button
    type="button"
    className="btn btn-outline-secondary"
    onClick={() =>
      setShowPassword(!showPassword)
    }
  >
    {showPassword ? "🙈" : "👁"}
  </button>
</div>

        <button
          type="submit"
          className="btn-pink w-100"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;