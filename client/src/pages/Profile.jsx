import { useState } from "react";
import { FaPencilAlt, FaPlus, FaTrash } from "react-icons/fa";

function Profile() {
    const [user, setUser] = useState({
        name: "Prathamesh Jaiswal",
        dob: "2001-01-01",
        gender: "Male",
        location: "India",
        phone: "9876543210",
        profileImage: ""
    });

    const [education, setEducation] = useState({
        university: "",
        highestQualification: "",
        course: "",
        specialization: ""
    });

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setUser({ ...user, profileImage: URL.createObjectURL(file) });
        }
    };

    const handleRemoveImage = () => {
        setUser({ ...user, profileImage: "" });
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold text-center mb-6">Profile</h1>

            <div className="flex justify-between gap-6">

                {/* Profile Image */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-medium mb-4">Profile Image</h2>
                    <div className="flex flex-col items-center relative">
                        {user.profileImage ? (
                            <>
                                <img
                                    src={user.profileImage}
                                    alt="Profile"
                                    className="w-36 h-36 rounded-full object-cover"
                                />
                                <div className="absolute bottom-0 bg-black bg-opacity-50 w-full text-center text-white py-2 rounded-b-full">
                                    <button
                                        onClick={handleRemoveImage}
                                        className="flex items-center justify-center gap-2 text-sm"
                                    >
                                        <FaTrash /> Remove
                                    </button>
                                </div>
                            </>
                        ) : (
                            <label className="w-36 h-36 bg-gray-300 rounded-full flex items-center justify-center flex-col cursor-pointer relative">
                                <FaPlus className="text-xl text-gray-600" />
                                <span className="text-sm text-gray-600 mt-2">Add Photo</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                            </label>
                        )}
                    </div>
                </div>

                {/* Personal Information */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-medium mb-4">Personal Information</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium">Name:</label>
                            <input
                                type="text"
                                value={user.name}
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Date of Birth:</label>
                            <input
                                type="date"
                                value={user.dob}
                                onChange={(e) => setUser({ ...user, dob: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Gender:</label>
                            <input
                                type="text"
                                value={user.gender}
                                onChange={(e) => setUser({ ...user, gender: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Location:</label>
                            <input
                                type="text"
                                value={user.location}
                                onChange={(e) => setUser({ ...user, location: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Phone:</label>
                            <input
                                type="text"
                                value={user.phone}
                                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Education Details */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-medium mb-4">Education Details</h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">University:</label>
                        <input
                            type="text"
                            value={education.university}
                            onChange={(e) => setEducation({ ...education, university: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Highest Qualification:</label>
                        <input
                            type="text"
                            value={education.highestQualification}
                            onChange={(e) => setEducation({ ...education, highestQualification: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Course:</label>
                        <input
                            type="text"
                            value={education.course}
                            onChange={(e) => setEducation({ ...education, course: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Specialization:</label>
                        <input
                            type="text"
                            value={education.specialization}
                            onChange={(e) => setEducation({ ...education, specialization: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Course Type:</label>
                        <select
                            value={education.courseType}
                            onChange={(e) => setEducation({ ...education, courseType: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Distance Learning">Distance Learning</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-medium">Start Year:</label>
                        <input
                            type="number"
                            value={education.startYear}
                            onChange={(e) => setEducation({ ...education, startYear: e.target.value })}
                            min="1900"
                            max="2099"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Passing Year:</label>
                        <input
                            type="number"
                            value={education.passingYear}
                            onChange={(e) => setEducation({ ...education, passingYear: e.target.value })}
                            min="1900"
                            max="2099"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Grading System:</label>
                        <select
                            value={education.gradingSystem}
                            onChange={(e) => setEducation({ ...education, gradingSystem: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="Percentage">Percentage</option>
                            <option value="CGPA">CGPA</option>
                        </select>
                    </div>
                    {education.gradingSystem === "CGPA" && (
                        <div>
                            <label className="text-sm font-medium">CGPA:</label>
                            <input
                                type="number"
                                value={education.cgpa}
                                onChange={(e) => setEducation({ ...education, cgpa: e.target.value })}
                                step="0.01"
                                min="0.00"
                                max="10.00"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
