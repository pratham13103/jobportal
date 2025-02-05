import { useState } from "react";
import axios from "axios";

function OtpLogin() {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const countryCode = "+91"; // Example for India

    // Function to send OTP
    const sendOtp = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/otp/send-otp`, { phone });
            if (response.status === 200) {
                setIsOtpSent(true);
                alert("OTP sent successfully!");
            }
        } catch (error) {
            alert("Error sending OTP. Try again.");
        }
    };

    // Function to verify OTP
    const verifyOtp = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/otp/verify-otp`, { phone, otp });
            if (response.status === 200) {
                alert("OTP verified successfully!");
            } else {
                alert("Invalid OTP. Try again.");
            }
        } catch (error) {
            alert("Error verifying OTP.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">OTP Login</h2>

                {!isOtpSent ? (
                    <div>
                        <div className="flex items-center justify-center mb-4">
                            {/* Country Code Input */}
                            <input
                                type="text"
                                value={countryCode}
                                readOnly
                                className="w-16 p-2 text-center bg-gray-200 border border-gray-300 rounded-l-md"
                            />
                            {/* Phone Number Input */}
                            <input
                                type="text"
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-r-md focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <button
                            onClick={sendOtp}
                            className="w-full py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg transition duration-300"
                        >
                            Send OTP
                        </button>
                    </div>
                ) : (
                    <div>
                        {/* OTP Input */}
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 mb-4"
                        />
                        {/* Verify OTP Button */}
                        <button
                            onClick={verifyOtp}
                            className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300"
                        >
                            Verify OTP
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default OtpLogin;
