import React, { useState } from "react";
import ItemIssueForm from "../components/issueItem";
import ItemReturnForm from "../components/returnItem";
import Spinner from "../assets/Spinner";

const TransactionBar = () => {
	const [selectedOption, setSelectedOption] = useState("issueBook");

	return (
		<div className="min-h-screen  flex">
			{/* Sidebar */}
			<aside className="w-64 m-5 p-2 bg-gray-800 shadow-inner shadow-slate-100 h-full rounded-md">
				<div className="p-4 border-b border-gray-700 ">
					<h1 className="text-lg font-bold text-sky-400 text-center">
						Transaction
					</h1>
				</div>
				<nav>
					<ul>
						{/* Is Book Available */}
						<li className="border-b border-gray-700">
							<button
								onClick={() => setSelectedOption("isAvailable")}
								className="w-full text-left px-4 py-2 text-sky-400 hover:bg-gray-700 flex justify-between items-center"
							>
								Book Availablity
							</button>
						</li>
						{/* Issue Book */}
						<li className="border-b border-gray-700">
							<button
								onClick={() => setSelectedOption("issueBook")}
								className="w-full text-left px-4 py-2 text-sky-400 hover:bg-gray-700 flex justify-between items-center"
							>
								Issue Item
							</button>
						</li>
						{/* Return Book */}
						<li className="border-b border-gray-700">
							<button
								onClick={() => setSelectedOption("returnBook")}
								className="w-full text-left px-4 py-2 text-sky-400 hover:bg-gray-700 flex justify-between items-center"
							>
								Return Item
							</button>
						</li>
						{/* Pay Fine */}
						<li>
							<button
								onClick={() => setSelectedOption("payFine")}
								className="w-full text-left px-4 py-2 text-sky-400 hover:bg-gray-700 flex justify-between items-center"
							>
								Fine Payment
							</button>
						</li>
					</ul>
				</nav>
			</aside>

			{/* Main Content */}
			<div className="flex-1 p-8">
				{/* Conditional Content */}
				{selectedOption === "isAvailable" && (
					<div>
						<h2 className="text-2xl font-bold text-gray-700 mb-4">
							{/* <Spinner/> */}
							Book Availability
						</h2>
					</div>
				)}

				{selectedOption === "issueBook" && (
					<div>
						{/* <h2 className="text-2xl font-bold text-gray-700 mb-4"> */}
							<ItemIssueForm />
						{/* </h2> */}
					</div>
				)}

				{selectedOption === "returnBook" && (
					<div>
						{/* <h2 className="text-2xl font-bold text-gray-700 mb-4"> */}
							<ItemReturnForm />
						{/* </h2> */}
					</div>
				)}

				{selectedOption === "payFine" && (
					<div>
						<h2 className="text-2xl font-bold text-gray-700 mb-4">Pay Fine</h2>
						<p className="text-gray-600">
							Check for overdue books and pay the fine amount.
						</p>
					</div>
				)}

				{!selectedOption && (
					<div>
						<h2 className="text-2xl font-bold text-gray-700 mb-4">
							Select a transaction from the sidebar
						</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default TransactionBar;
