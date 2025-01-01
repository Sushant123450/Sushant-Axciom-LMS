import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../assets/Spinner";

const MasterListItems = ({ itemType }) => {
	const { items, loading } = useContext(AppContext);
	console.log(`itemType :- ${itemType}`);

	return (
		<div className="max-w-7xl p-6 bg-gray-800  shadow-lg rounded-lg">
			<h1 className="text-3xl font-semibold text-center mb-6">
				Master List of {itemType}s
			</h1>

			{loading ? (
				<div className="flex justify-center">
					<div>
						<Spinner />
					</div>
				</div>
			) : (
				<div className="overflow-x-auto">
					<table className="w-[95%] mx-auto bg-white border">
						<thead>
							<tr className=" bg-gray-700 text-gray-100 uppercase text-base leading-normal">
								<th className="py-3 px-3 text-left">Item Id</th>
								<th className="py-3 px-3 text-left">Name of Movie</th>
								<th className="py-3 px-3 text-left">Author Name</th>
								<th className="py-3 px-3 text-left">Category</th>
								<th className="py-3 px-3 text-left">Status</th>
								<th className="py-3 px-3 text-left">Cost</th>
								<th className="py-3 px-3 text-left">Procurement Date</th>
							</tr>
						</thead>

						<tbody className="text-gray-600 text-sm ">
							{items
								.filter((item) => item.itemType === itemType)
								.map((item, index) => (
									<tr
										key={index}
										className="border-b-2 bg-blue-200 text-black font-normal border-gray-100 hover:bg-gray-100"
									>
										<td className="py-3 px-3 text-left whitespace-nowrap">
											{item.itemId}
										</td>

										<td className="py-3 px-3 text-left">{item.name}</td>
										<td className="py-3 px-3 text-left">{item.author}</td>
										<td className="py-3 px-3 text-left">{item.category}</td>
										<td className="py-3 px-3 text-left">{item.status}</td>
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

export default MasterListItems;
