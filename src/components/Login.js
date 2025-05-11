import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const role = e.target.role.value;

    if (!role) {
      setError("Please select a role.");
      return;
    }

    // Call the login function with the selected role
    login(role)
      .then(() => {
        navigate("/dashboard"); // Navigate to the dashboard after successful login
      })
      .catch((err) => {
        setError("Login failed: " + err.message); // Show an error if login fails
      });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleLogin} className="card p-4 shadow-sm">
        <h2 className="mb-4">Login</h2>
        <div className="mb-3">
          <label className="form-label">Select Role</label>
          <select name="role" className="form-select">
            <option value="Medical Director">Medical Director</option>
            <option value="Charge Nurse">Charge Nurse</option>
            <option value="Personnel Officer">Personnel Officer</option>
          </select>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
