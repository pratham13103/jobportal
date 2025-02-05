import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ setUser }) {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(""); 
    const navigate = useNavigate(); 

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const googleAuth = () => {
        window.location.href = "http://localhost:8080/api/v1/auth/google";
    };
    
    const linkedinAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/linkedin/callback`,
            "_self"
        );
    };

    const handleLogin = async (e) => {
        e.preventDefault(); 
        try {
            const response = await fetch("http://localhost:8080/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }), 
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("user", JSON.stringify(data.user)); 
                setUser(data.user); 
                navigate("/home"); 
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("An error occurred. Please try again later.");
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            navigate("/home"); 
        }
    }, []);
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-semibold text-gray-800 mb-8">Log in Form</h1>
            <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-3xl overflow-hidden">
                <div className="flex-1 relative">
                    <img className="w-[160%] absolute left-[-150px] top-[-50px]" src="./images/login.jpg" alt="login" />
                </div>
                <div className="flex-2 flex flex-col items-center justify-center p-8">
                    <h2 className="text-2xl font-medium text-gray-800 mb-8">Members Log in</h2>

                    <div className="w-80 mb-4">
                        <input 
                            type="email" 
                            className="w-full p-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>

                    <div className="w-80 mb-4 relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full p-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <span
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "👁️" : "👁️‍🗨️"}
                        </span>
                    </div>

                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    <button 
                        className="w-80 py-2 bg-yellow-400 text-white rounded-full font-semibold mb-4 transition duration-300 ease-in-out hover:bg-yellow-500"
                        onClick={handleLogin}
                    >
                        Log In
                    </button>

                    <p className="text-sm text-gray-800 mb-4">
                        <Link to="/otp-login" className="text-yellow-400 hover:underline">Use OTP to login</Link>
                    </p>

                    <p className="text-sm text-gray-800 mb-4">or</p>

                    <button
                        className={`w-56 h-10 bg-white text-gray-800 rounded-md shadow-md mb-4 flex items-center justify-center space-x-3 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={googleAuth}
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="text-yellow-400">Signing you in...</span>
                        ) : (
                            <>
                                <img src="./images/google.png" alt="Google icon" className="w-6 h-6" />
                                <span>Sign in with Google</span>
                            </>
                        )}
                    </button>

                    <button
                        className="w-56 h-10 bg-white text-gray-800 rounded-md shadow-md flex items-center justify-center space-x-3 mb-4"
                        onClick={linkedinAuth}
                    >
                        <img src="./images/linkedin.png" alt="LinkedIn icon" className="w-6 h-6" />
                        <span>Sign in with LinkedIn</span>
                    </button>

                    <p className="text-sm text-gray-800">
                        New Here? <Link to="/signup" className="text-yellow-400 hover:underline">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
