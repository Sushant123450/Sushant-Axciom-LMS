import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TopNavBar = () => {
	const { navigate, handleLogout, cookies } = useContext(AppContext);

	return (
		<nav className="bg-gray-900 text-gray-200 px-6 py-4 mx-6 my-10 ring-10 rounded-lg ring-gray-700 shadow-[0_0_15px_6px_rgba(0,255,255,0.6)]">
			<div className="flex justify-between items-center">
				<div className="flex space-x-6">
					{cookies.adm && (
						<a
							href="/maintenance"
							className="text-gray-300 hover:text-gray-100 transition duration-200"
						>
							Maintenance
						</a>
					)}
					<a
						href="/reports"
						className="text-gray-300 hover:text-gray-100 transition duration-200"
					>
						Reports
					</a>
				</div>

				<button
					className="text-xl font-bold text-gray-100 hover:text-gray-300 transition duration-200"
					onClick={() => navigate("/dashboard")}
				>
					Library Management System
				</button>
				<div className="flex space-x-6">
					<a
						href="/transactions"
						className="text-gray-300 hover:text-gray-100 transition duration-200"
					>
						Transactions
					</a>
					<a
						onClick={handleLogout}
						className="text-gray-300 hover:text-gray-100 transition duration-200 cursor-pointer"
					>
						Log Out
					</a>
				</div>
			</div>
		</nav>
	);
};

export default TopNavBar;
