import {  Card } from "flowbite-react";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProfileManagement = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  console.log(userInfo);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <Card className="max-w-sm">
        <div className="flex flex-col items-center pb-10">
          <img
            alt="user image"
            height="96"
            src={
              userInfo?.photoURL ||
              "https://previews.123rf.com/images/urfandadashov/urfandadashov1805/urfandadashov180500070/100957966-ic%C3%B4ne-photo-non-disponible-isol%C3%A9-sur-fond-blanc-illustration-vectorielle.jpg"
            }
            width="96"
            className="mb-3 rounded-full shadow-lg"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {userInfo?.name || "Loading..."}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {userInfo?.email || "Loading..."}
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <Link
              to={`/dashboard/profile/edit/${userInfo?._id}`}
              className="inline-flex items-center rounded-lg bg-green-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Edit Profile
            </Link>
            <Link
              to={`/dashboard/profile/edit-pass/${userInfo?._id}`}
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900
             hover:bg-blue-200 hover:text-blue-700  /* New hover styles */
             focus:outline-2 outline-offset-2 outline-blue-500 focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Change Password
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileManagement;
