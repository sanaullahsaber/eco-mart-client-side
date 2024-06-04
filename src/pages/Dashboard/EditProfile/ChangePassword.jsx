import { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { updatePassword } from "firebase/auth";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const data = useLoaderData();
  const { user } = useAuth();
  const [passMatch, setPassMatch] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  console.log(data);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const newPassword = form.newPassword.value;
    const confirmPassword = form.confirmPassword.value;

    console.log("change pass", newPassword, confirmPassword);

    if (newPassword !== confirmPassword) {
      setPassMatch(false);
    }

     if (newPassword === confirmPassword) {
       updatePassword(user, newPassword);
        toast.success("Password updated successfully!");
       if (user) {
         navigate(from);
       }
     }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-8"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Change Password</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data?.email}
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            disabled
            required
          />
        </div>

        {/* Existing form fields */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="newPassword"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="New Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm New Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {!passMatch && (
          <div className="my-2">
            <p className="text-red-500">Passwords do not match!</p>
          </div>
        )}
        <div className="flex items-center justify-between">
          <input
            style={{
              background:
                "linear-gradient(91.13deg, rgb(32, 41, 42) -0.878%, rgb(57, 128, 77) 99.72%)",
            }}
            type="submit"
            value="Update Password"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;