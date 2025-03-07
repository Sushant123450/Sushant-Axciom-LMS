import React, { useState } from "react";
import MasterListItems from "../components/MasterListItems";
import IssueRequests from "../components/IssueRequests";
import MasterListOfMemberships from "../components/MasterListOfMemberships";
import ActiveIssues from "../components/ActiveIssues";
import OverdueIssues from "../components/overdue";

const ReportsBar = () => {
	const [selectedReport, setSelectedReport] = useState("masterListBooks");

	const handleSelection = (report) => {
		setSelectedReport(report);
	};

	return (
		<div className=" text-gray-200  min-h-screen">
			<div className="min-h-screen flex">
				{/* Sidebar */}
				<aside className="w-64 m-5 p-2 bg-gray-800 shadow-inner shadow-slate-100 h-full rounded-md">
					<div className="p-4 border-b border-gray-700 ">
						<h1 className="text-lg font-bold text-sky-400 text-center">
							Reports
						</h1>
					</div>
					<nav>
						<ul>
							<li className="border-b border-gray-700">
								<button
									onClick={() => handleSelection("masterListBooks")}
									className="w-full text-left px-4 py-2 text-sky-400 hover:bg-gray-700 flex justify-between items-center"
								>
									Master List of Books
								</button>
							</li>
							<li className="border-b border-gray-700">
								<button
									onClick={() => handleSelection("masterListMovies")}
									className="w-full text-left px-4 py-2 text-sky-400 hover:bg-gray-700 flex justify-between items-center"
								>
									Master List of Movies
								</button>
							</li>
							<li className="border-b border-gray-700">
								<button
									onClick={() => handleSelection("masterListMemberships")}
									className="w-full text-left px-4 py-2 text-sky-400 hover:bg-gray-700 flex justify-between items-center"
								>
									Master List of Memberships
								</button>
							</li>
							<li className="border-b border-gray-700">
								<button
									onClick={() => handleSelection("activeIssues")}
									className="w-full text-left px-4 py-2 text-sky-400 hover:bg-gray-700 flex justify-between items-center"
								>
									Active Issues
								</button>
							</li>
							<li className="border-b border-gray-700">
								<button
									onClick={() => handleSelection("overdueReturns")}
									className="w-full text-left px-4 py-2 text-sky-400 hover:bg-gray-700 flex justify-between items-center"
								>
									Overdue Returns
								</button>
							</li>
							<li>
								<button
									onClick={() => handleSelection("issueRequests")}
									className="w-full text-left px-4 py-2 text-sky-400 hover:bg-gray-700 flex justify-between items-center"
								>
									Issue Requests
								</button>
							</li>
						</ul>
					</nav>
				</aside>

				{/* Main Content */}
				<div className="flex-1 flex justify-center h-full p-8">
					<div className="w-full  bg-gray-800 text-gray-100 rounded-lg shadow-lg p-6">
						{selectedReport === "masterListBooks" && (
							<MasterListItems itemType={"Book"} />
						)}
						{selectedReport === "masterListMovies" && (
							<MasterListItems itemType={"Movie"} />
						)}
						{selectedReport === "masterListMemberships" && (
							<MasterListOfMemberships />
						)}
						{selectedReport === "activeIssues" && <ActiveIssues />}
						{selectedReport === "overdueReturns" && <OverdueIssues />}
						{selectedReport === "issueRequests" && <IssueRequests />}

						{!selectedReport && (
							<h2 className="text-2xl font-bold text-gray-700 text-center">
								Select a report from the sidebar
							</h2>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReportsBar;
