import React, { useState } from "react";
import UserManagement from "../components/UserManagement.jsx";
import AddMembership from "../components/AddMembership.jsx";
import UpdateMembership from "../components/UpdateMembership.jsx";
import AddItem from "../components/Additem.jsx";
import UpdateItem from "../components/Updateitem.jsx";

const MaintenanceBar = () => {
	const [dropdowns, setDropdowns] = useState({
		membership: false,
		booksMovies: false,
		userManagement: false,
	});
	const [selectedSection, setSelectedSection] = useState("addMembership"); // State to track the selected section

	const toggleDropdown = (section) => {
		// setDropdowns({
		// 	membership: false,
		// 	booksMovies: false,
		// 	userManagement: false,
		// });
		setDropdowns((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

	const handleSelection = (section) => {
		setSelectedSection(section); // Set the selected section
	};

	return (
		<div className=" text-gray-200  min-h-screen">
			<div className="min-h-screen flex">
				{/* Sidebar */}
				<aside className="w-64 m-5 p-2 bg-gray-800 shadow-inner shadow-slate-100 h-full rounded-md">
					<div className="p-4 border-b border-gray-700 ">
						<h1 className="text-lg font-bold text-sky-400 text-center">
							Maintenance
						</h1>
					</div>
					<nav>
						<ul>
							{/* User Management */}
							<li className="border-b border-gray-700">
								<button
									onClick={() => {
										toggleDropdown("userManagement");
									}}
									className="w-full text-left px-4 py-2 text-sky-400 hover:bg-gray-700 flex justify-between items-center"
								>
									User Management
								</button>
								<div
									className={`overflow-hidden transition-all duration-300 ease-in-out ${
										dropdowns.userManagement
											? "max-h-40 opacity-100"
											: "max-h-0 opacity-0"
									}`}
								>
									<div className="px-3">
										<button
											className="block w-full text-sky-300 py-1 text-left hover:underline p-1 rounded-md hover:bg-gray-700"
											onClick={() => handleSelection("addUser")}
										>
											Add
										</button>
										<button
											className="block w-full text-sky-300 py-1 text-left hover:underline p-1 rounded-md hover:bg-gray-700"
											onClick={() => handleSelection("updateUser")}
										>
											Update
										</button>
									</div>
								</div>
							</li>
							{/* Membership */}
							<li className="border-b border-gray-700">
								<button
									onClick={() => {
										toggleDropdown("membership");
									}}
									className="w-full text-left px-4 py-2 text-sky-400 hover:bg-gray-700 flex justify-between items-center"
								>
									Membership
								</button>
								<div
									className={`overflow-hidden transition-all duration-300 ease-in-out ${
										dropdowns.membership
											? "max-h-40 opacity-100"
											: "max-h-0 opacity-0"
									}`}
								>
									<div className="px-3">
										<button
											className="block w-full text-sky-300 py-1 text-left hover:underline p-1 rounded-md hover:bg-gray-700"
											onClick={() => handleSelection("addMembership")}
										>
											Add
										</button>
										<button
											className="block w-full text-sky-300 py-1 text-left hover:underline p-1 rounded-md hover:bg-gray-700"
											onClick={() => handleSelection("updateMembership")}
										>
											Update
										</button>
									</div>
								</div>
							</li>
							{/* Books/Movies */}
							<li className="border-b border-gray-700">
								<button
									onClick={() => {
										toggleDropdown("booksMovies");
									}}
									className="w-full text-left px-4 py-2 text-sky-400 hover:bg-gray-700 flex justify-between items-center"
								>
									Books/Movies
								</button>
								<div
									className={`overflow-hidden transition-all duration-300 ease-in-out ${
										dropdowns.booksMovies
											? "max-h-40 opacity-100"
											: "max-h-0 opacity-0"
									}`}
								>
									<div className="px-3">
										<button
											className="block w-full text-sky-300 py-1 text-left hover:underline p-1 rounded-md hover:bg-gray-700"
											onClick={() => handleSelection("addItems")}
										>
											Add
										</button>
										<button
											className="block w-full text-sky-300 py-1 text-left hover:underline p-1 rounded-md hover:bg-gray-700"
											onClick={() => handleSelection("updateItems")}
										>
											Update
										</button>
									</div>
								</div>
							</li>
						</ul>
					</nav>
				</aside>

				{/* Main Content */}
				<div className="flex-1 flex justify-center h-full p-8">
					<div className="w-full max-w-2xl bg-gray-800 text-gray-600 rounded-lg shadow-lg p-6">
						{selectedSection === "addMembership" && <AddMembership />}
						{selectedSection === "updateMembership" && <UpdateMembership />}
						{selectedSection === "addItems" && <AddItem />}
						{selectedSection === "updateItems" && <UpdateItem />}
						{selectedSection === "addUser" && <UserManagement update={false} />}
						{selectedSection === "updateUser" && (
							<UserManagement update={true} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MaintenanceBar;
