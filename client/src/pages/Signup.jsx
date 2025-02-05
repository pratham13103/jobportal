import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  // State for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    updates: false,
  });
  
  const [showPassword, setShowPassword] = useState(false);
  // State for password input
  const [password, setPassword] = useState("");

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Account created successfully!");
      } else {
        alert(result.message || "Error during signup.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error while sending the request.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl flex rounded-3xl shadow-lg bg-white p-8">
        <div className="flex-1 relative rounded-l-3xl overflow-hidden">
          <img
            className="w-[160%] absolute left-[-125px] top-[-50px]"
            src="./images/signup.jpg"
            alt="signup"
          />
        </div>
        <div className="flex-2 flex flex-col items-center justify-center p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create Account</h2>
          
          {/* Username Field */}
          <input
            type="text"
            className="w-80 h-9 p-2 mb-2 border border-gray-500 rounded-md text-sm"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          
          {/* Email Field */}
          <input
            type="email"
            className="w-80 h-9 p-2 mb-2 border border-gray-500 rounded-md text-sm"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          
          {/* Password Input with Show/Hide Toggle */}
          <div className="relative w-80 mb-2">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full h-9 p-2 border border-gray-500 rounded-md text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
            <span
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>
          
          {/* Phone Field */}
          <input
            type="text"
            className="w-80 h-9 p-2 mb-2 border border-gray-500 rounded-md text-sm"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          
          {/* Checkbox for Updates */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="updates"
              className="mr-2"
              name="updates"
              checked={formData.updates}
              onChange={handleChange}
            />
            <label htmlFor="updates" className="text-sm text-gray-600">
              Send me important updates via SMS, Email, and WhatsApp
            </label>
          </div>

          {/* Terms & Conditions */}
          <p className="text-xs text-center text-gray-600 mb-4">
            By clicking Register, you agree to the{" "}
            <Link to="/terms" className="text-yellow-500 font-semibold">
              Terms and Conditions
            </Link> &{" "}
            <Link to="/privacy" className="text-yellow-500 font-semibold">
              Privacy Policy
            </Link>.
          </p>
          
          {/* Register Now Button */}
          <button
            className="w-80 py-2 text-white bg-yellow-500 rounded-full text-lg font-semibold hover:bg-yellow-600 transition"
            onClick={handleSubmit}
          >
            Register Now
          </button>

          {/* Already Have an Account? */}
          <p className="text-sm text-gray-600 mt-4">
            Already Have an Account? <Link to="/login" className="text-yellow-500 font-semibold">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
