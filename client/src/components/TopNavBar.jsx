import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  const { navigate, handleLogout, cookies } = useContext(AppContext);

  return (
    <nav className="bg-gray-900 text-gray-200 px-6 py-4 mx-6 my-10 ring-10 rounded-lg ring-gray-700 shadow-[0_0_15px_6px_rgba(0,255,255,0.6)]">
      <div className="flex justify-between items-center">
        <div className="flex space-x-6">
          {cookies.adm && (
            <Link
              to="/maintenance"
              className="text-gray-300 hover:text-gray-100 transition duration-200"
            >
              Maintenance
            </Link>
          )}
          <Link
            to="/reports"
            className="text-gray-300 hover:text-gray-100 transition duration-200"
          >
            Reports
          </Link>
        </div>

        <button
          className="text-xl font-bold text-gray-100 hover:text-gray-300 transition duration-200"
          onClick={() => navigate("/dashboard")}
        >
          Library Management System
        </button>
        <div className="flex space-x-6">
          <Link
            to="/transactions"
            className="text-gray-300 hover:text-gray-100 transition duration-200"
          >
            Transactions
          </Link>
          <Link
            onClick={handleLogout}
            className="text-gray-300 hover:text-gray-100 transition duration-200 cursor-pointer"
          >
            Log Out
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
