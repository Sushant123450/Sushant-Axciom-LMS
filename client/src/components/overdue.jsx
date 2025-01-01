import Spinner from "../assets/Spinner";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const OverdueIssues = () => {
	const { overdue, getOverDue, loading } = useContext(AppContext);

	useEffect(() => {
		if (overdue.length == 0) {
			getOverDue();
		}
	}, [overdue, getOverDue]);

	return (
		<div className="max-w-7xl p-6 bg-gray-800  shadow-lg rounded-lg">
			<h1 className="text-3xl font-semibold text-center mb-6">
				Overdue Issues
			</h1>

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
							<th className="py-3 px-3 text-left">fine</th>
							<th className="py-3 px-3 text-left">Fine Paid</th>
						</tr>
					</thead>

					<tbody className="text-gray-600 text-sm font-light">
						{overdue.map((item, index) => (
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

								<td className="py-3 px-3 text-left">{item.fine}</td>
								<td className="py-3 px-3 text-left">
									{item.finePaid ? "Yes" : "No"}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default OverdueIssues;
