import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
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
      const data = await loginUser(formData);

      localStorage.setItem("token", data.token);

localStorage.setItem(
  "user",
  JSON.stringify(data.user)
);

      alert("Login Successful");

      navigate("/");
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="auth-card">
      <h2 className="text-center mb-4">
        Welcome Back 👋
      </h2>

      <form onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;