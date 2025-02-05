import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    const goToProfile = () => {
        navigate("/profile");
    };

    if (!user) {
        return <p className="text-center text-lg text-gray-600">Loading...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-semibold text-gray-800 relative mb-12">
                Home
                <span className="block w-44 h-1 bg-gray-800 absolute left-1/2 transform -translate-x-1/2 bottom-[-10px]"></span>
            </h1>

            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-3xl overflow-hidden w-[800px] h-[450px]">
                {/* Left Side */}
                <div className="w-full md:w-1/2 relative">
                    <img
                        className="w-full h-full object-cover"
                        src="./images/profile.jpg"
                        alt="Profile"
                    />
                </div>

                {/* Right Side */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
                    <h2 className="text-2xl font-medium text-gray-800 mb-4">Profile</h2>
                    <img
                        src={user.picture}
                        alt="profile"
                        className="w-16 h-16 rounded-full mb-4"
                    />
                    <input
                        type="text"
                        defaultValue={user.name}
                        className="w-80 p-2 border border-gray-400 rounded-md text-center mb-2"
                        readOnly
                    />
                    <input
                        type="text"
                        defaultValue={user.email}
                        className="w-80 p-2 border border-gray-400 rounded-md text-center mb-4"
                        readOnly
                    />
                    <button
                        className="w-80 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg mb-2"
                        onClick={logout}
                    >
                        Log Out
                    </button>
                    <button
                        className="w-80 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
                        onClick={goToProfile}
                    >
                        Complete Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
