import React, { useContext, useEffect } from "react";
import Spinner from "../assets/Spinner";
import { AppContext } from "../context/AppContext";

const ActiveIssues = () => {
	const { activeIssues, getActiveIssue, loading } = useContext(AppContext);

	useEffect(() => {
		if (activeIssues.length == 0) {
			getActiveIssue();
		}
	}, [activeIssues, getActiveIssue]);

	return (
		<div className="max-w-7xl p-6 bg-gray-800 shadow-lg rounded-lg">
			<h1 className="text-3xl font-semibold text-center mb-6">Active Issues</h1>

			{loading ? (
				<div className="flex justify-center">
					<Spinner />
				</div>
			) : (
				<table className="w-[95%] mx-auto bg-white border">
					<thead>
						<tr className=" bg-gray-700 text-gray-100 uppercase text-base leading-normal">
							<th className="py-3 px-3 text-left">Issue Id</th>
							<th className="py-3 px-3 text-left">Name</th>
							<th className="py-3 px-3 text-left">Item id</th>
							<th className="py-3 px-3 text-left">Date OF Issue</th>
							<th className="py-3 px-3 text-left">Date OF Return</th>
						</tr>
					</thead>

					<tbody className="text-gray-600 text-sm">
						{activeIssues.map((item, index) => (
							<tr
								key={index}
								className="border-b-2 bg-blue-200 text-black font-normal border-gray-100 hover:bg-gray-100"
							>
								<td className="py-3 px-3 text-left whitespace-nowrap">
									{item.id}
								</td>
								<td className="py-3 px-3 text-left">{item.name}</td>
								<td className="py-3 px-3 text-left">{item.itemId}</td>

								<td className="py-3 px-3 text-left">{item.dateOfIssue}</td>
								<td className="py-3 px-3 text-left">{item.dateOfReturn}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default ActiveIssues;
