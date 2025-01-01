import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
	const { items, loading } = useContext(AppContext);

	return (
		<div>
			{loading ? (
				<div className="flex justify-center items-center min-h-screen">
					<div className="loader"></div>
				</div>
			) : (
				<div className="overflow-x-auto">
					<table className="w-[95%] mx-auto bg-white border">
						<thead>
							<tr className=" bg-gray-700 text-gray-100 uppercase text-base leading-normal">
								<th className="py-3 px-3 text-left">Item ID</th>
								<th className="py-3 px-3 text-left">Item Type</th>
								<th className="py-3 px-3 text-left">Name</th>
								<th className="py-3 px-3 text-left">Author</th>
								<th className="py-3 px-3 text-left">Category</th>
								{/* <th className="py-3 px-3 text-left">Status</th> */}
								<th className="py-3 px-3 text-left">Cost</th>
								<th className="py-3 px-3 text-left">Procurement Date</th>
							</tr>
						</thead>
						<tbody className="text-gray-600 text-sm">
							{items.map((item, index) => (
								<tr
									key={index}
									className="border-b-2 bg-blue-200 border-gray-100 text-black font-normal hover:bg-gray-100"
								>
									<td className="py-3 px-3 text-left whitespace-nowrap">
										{item.itemId}
									</td>
									<td className="py-3 px-3 text-left whitespace-nowrap">
										{item.itemType}
									</td>
									<td className="py-3 px-3 text-left">{item.name}</td>
									<td className="py-3 px-3 text-left">{item.author}</td>
									<td className="py-3 px-3 text-left">{item.category}</td>
									{/* <td className="py-3 px-3 text-left">{item.status}</td> */}
									<td className="py-3 px-3 text-left">{item.cost}</td>
									<td className="py-3 px-3 text-left">
										{item.procurementDate}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
