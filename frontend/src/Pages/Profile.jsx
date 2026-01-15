import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

function Profile() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const [editUser, setEditUser] = useState(false);
  const [editSecurity, setEditSecurity] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    FullName: user?.FullName || "",
    Email: user?.Email || "",
    Password: "",
  });

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Please log in first
        </h2>
        <button
          onClick={() => navigate("/login")}
          className="bg-black text-white px-8 py-2 rounded-full text-sm tracking-wide hover:bg-gray-800 transition-all"
        >
          Go to Login
        </button>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (type) => {
    // Later connect this with backend API
    // const userName = {
    //     FullName: FullName
    // }

    console.log("Updated:", type, formData);
    alert(`${type} details updated successfully!`);

    if (type === "User") setEditUser(false);
    if (type === "Security") setEditSecurity(false);
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    // FormData for backend
    const formData = new FormData();
    formData.append("image", file);

    // Example API call (replace URL with your backend endpoint)
    try {
      const res = await fetch("/api/user/upload-image", {
        method: "POST",
        body: formData,
        // headers: { Authorization: `Bearer ${token}` }, // if needed
      });
      const data = await res.json();
      console.log(data);

      // Update user image locally (depends on your context setup)
      // setUser({ ...user, Image: data.imageUrl });
      alert("Image uploaded successfully!");
    } catch (err) {
      alert("Image upload failed!", err);
    }
    setUploading(false);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-center max-w-[1400px] mx-auto shadow-2xl rounded-2xl overflow-hidden bg-white mt-10 mb-10">
        {/* Left Section: Profile Image & Basic Info */}
        <div className="lg:w-1/3 w-full relative flex flex-col items-center justify-center py-16 px-8 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gradient-to-b from-gray-50 to-gray-200">
          <div className="relative z-10 flex flex-col items-center w-full">
            <div className="relative mb-6">
              {user.Image ? (
                <img
                  src={user.Image}
                  alt="Profile"
                  className="h-[130px] w-[130px] rounded-full border-4 border-blue-300 object-cover shadow-lg"
                />
              ) : (
                <FaUserCircle className="h-[130px] w-[130px] text-gray-400 border-4 border-[#ddd] rounded-full bg-white shadow-lg" />
              )}
              {/* Edit Button */}
              <label className="absolute bottom-2 right-2 bg-blue-600 text-white rounded-full px-4 py-1 text-xs cursor-pointer hover:bg-blue-700 transition-all shadow">
                Edit
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  disabled={uploading}
                />
              </label>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mt-2 text-center tracking-tight">
              {user.FullName}
            </h2>
            <p className="text-gray-500 text-base mt-2 text-center">
              {user.Email}
            </p>
            <div className="mt-6">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-8 py-2 rounded-full font-semibold shadow hover:bg-red-600 transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Details */}
        <div className="lg:w-2/3 w-full flex flex-col gap-8 py-16 px-8 bg-white">
          {/* User Info Section */}
          <div className="border border-gray-200 rounded-2xl p-10 mb-4 w-full bg-gradient-to-br from-white to-gray-100 shadow-md">
            <div className="flex items-center mb-8 gap-2">
              <FaUserCircle className="text-blue-500 text-3xl" />
              <h3 className="text-2xl font-bold text-gray-800">
                Personal Information
              </h3>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-5 mb-6 flex flex-col gap-1">
              <span className="text-xs text-gray-500">Full Name</span>
              <span className="text-lg font-semibold text-gray-900">
                {user.FullName}
              </span>
            </div>
            {editUser && (
              <div className="space-y-4">
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider">
                    New Full Name
                  </label>
                  <input
                    type="text"
                    name="FullName"
                    value={formData.FullName}
                    onChange={handleChange}
                    placeholder="Enter new full name"
                    className="mt-1 w-full border border-blue-300 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
                  />
                </div>
              </div>
            )}
            <div className="mt-8 flex gap-4">
              {editUser ? (
                <>
                  <button
                    onClick={() => handleUpdate("User")}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-full font-bold shadow hover:bg-blue-700 transition-all"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditUser(false)}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-full font-bold shadow hover:bg-gray-300 transition-all"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setEditUser(true)}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-full font-bold shadow hover:from-blue-600 hover:to-blue-800 transition-all"
                >
                  Edit Info
                </button>
              )}
            </div>
          </div>

          {/* Security Section */}
          <div className="border border-gray-200 rounded-2xl p-10 w-full bg-gradient-to-br from-white to-gray-100 shadow-md">
            <div className="flex items-center mb-8 gap-2">
              <MdOutlineSecurity className="text-purple-500 text-3xl" />
              <h3 className="text-2xl font-bold text-gray-800">
                Security Settings
              </h3>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-5 mb-6 flex flex-col gap-1">
              <span className="text-xs text-gray-500">Email</span>
              <span className="text-lg font-semibold text-gray-900">
                {user.Email}
              </span>
            </div>
            {editSecurity && (
              <div className="space-y-4">
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider">
                    New Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="Enter new email"
                    className="mt-1 w-full border border-purple-300 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-purple-500 outline-none bg-gray-50"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="Password"
                    value={formData.Password}
                    onChange={handleChange}
                    placeholder="Enter new password"
                    className="mt-1 w-full border border-purple-300 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-purple-500 outline-none bg-gray-50"
                  />
                </div>
              </div>
            )}
            <div className="mt-8 flex gap-4">
              {editSecurity ? (
                <>
                  <button
                    onClick={() => handleUpdate("Security")}
                    className="flex-1 bg-purple-600 text-white py-2 rounded-full font-bold shadow hover:bg-purple-700 transition-all"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditSecurity(false)}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-full font-bold shadow hover:bg-gray-300 transition-all"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setEditSecurity(true)}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 rounded-full font-bold shadow hover:from-purple-600 hover:to-purple-800 transition-all"
                >
                  Manage Security
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-xs mt-2 mb-6 text-center">
        © Samsung Electronics
      </p>
    </div>
  );
}

export default Profile;
