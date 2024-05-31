import React from 'react';
import { useAuthContext } from '../../../hooks/useAuthContext';

const Profile = () => {
    const {user} = useAuthContext()
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col items-center">
          <img 
            className="w-24 h-24 rounded-full border-2 border-indigo-500" 
            src="https://via.placeholder.com/150" 
            alt="Profile"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">Username</h2>
          <p className="text-gray-600">{user?.user.username}</p>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Joined on:</span>
            <span className="text-gray-800 font-medium">{user?.user.createdAt}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-600">Verified:</span>
            <span className="text-green-500 font-medium">{user?.user.isEmailVerified}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-600">Role:</span>
            <span className="text-gray-800 font-medium">{user?.user.role}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-600">Address:</span>
            <span className="text-gray-800 font-medium">{user?.user.address?.address}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-600">Phone:</span>
            <span className="text-gray-800 font-medium">{user?.user.address?.phoneNo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
