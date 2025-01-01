import Spinner from "../assets/Spinner";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const IssueRequests = () => {
	const { issueRequests, getIssueReuest, loading } = useContext(AppContext);

	useEffect(() => {
		if (issueRequests.length == 0) {
			getIssueReuest();
		}
	}, [issueRequests, getIssueReuest]);

	return (
		<div className="max-w-7xl p-6 bg-gray-800 text-gray-600 shadow-lg rounded-lg">
			<h1 className="text-3xl font-semibold text-center mb-6">Issue Request</h1>

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
							<th className="py-3 px-3 text-left">Requested Date</th>
							<th className="py-3 px-3 text-left">Request Fulfilled</th>
						</tr>
					</thead>

					<tbody className="text-gray-600 text-sm">
						{issueRequests.map((item, index) => (
							<tr
								key={index}
								className="border-b-2 bg-blue-200 text-black font-normal border-gray-100 hover:bg-gray-100"
							>
								<td className="py-3 px-3 text-left whitespace-nowrap">
									{item.id}
								</td>
								<td className="py-3 px-3 text-left">{item.name}</td>
								<td className="py-3 px-3 text-left">{item.requestedDate}</td>
								<td className="py-3 px-3 text-left">
									{item.requestFulfilled ? "Yes" : "No"}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default IssueRequests;
