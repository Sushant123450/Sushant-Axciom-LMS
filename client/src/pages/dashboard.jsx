import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
	const { items, loading } = useContext(AppContext);
	const [searchQuery, setSearchQuery] = useState("");

	const [filteredItems, setFilteredItems] = useState([]);

	useEffect(() => {
		let updatedItems = items;

		if (searchQuery.trim() !== "") {
			const query = searchQuery.toLowerCase();
			updatedItems = updatedItems.filter(
				(item) =>
					item.itemId.toLowerCase().includes(query) ||
					item.name.toLowerCase().includes(query) ||
					item.author.toLowerCase().includes(query) ||
					item.category.toLowerCase().includes(query)
			);
		}

		setFilteredItems(updatedItems);
	}, [searchQuery, items]);

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<div>
			{loading ? (
				<div className="flex justify-center items-center min-h-screen">
					<div className="loader"></div>
				</div>
			) : (
				<div className="overflow-x-auto p-4">
					<div className="flex flex-col lg:flex-row justify-between items-center w-[95%] mx-auto mb-4 space-y-4 lg:space-y-0 lg:space-x-4">
						<input
							type="text"
							value={searchQuery}
							onChange={handleSearchChange}
							placeholder="Search by ID, Name, Author, or Category"
							className="w-full lg:w-1/3 p-2 border rounded-md focus:ring-2 bg-slate-300  focus:ring-blue-500"
						/>
					</div>

					<table className="w-[95%] mx-auto bg-black border">
						<thead>
							<tr className="bg-gray-700 text-gray-100 uppercase text-base leading-normal">
								<th className="py-3 px-3 text-left">Item ID</th>
								<th className="py-3 px-3 text-left">Item Type</th>
								<th className="py-3 px-3 text-left">Name</th>
								<th className="py-3 px-3 text-left">Author</th>
								<th className="py-3 px-3 text-left">Category</th>
								<th className="py-3 px-3 text-left">Cost</th>
								<th className="py-3 px-3 text-left">Procurement Date</th>
							</tr>
						</thead>
						<tbody className="text-gray-600 text-sm">
							{filteredItems.map((item, index) => (
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
									<td className="py-3 px-3 text-left">{item.cost}</td>
									<td className="py-3 px-3 text-left">
										{item.procurementDate}
									</td>
								</tr>
							))}
						</tbody>
					</table>
					{filteredItems.length === 0 && (
						<div className="text-center mt-4 text-red-600">
							No items match your search or filter criteria.
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Dashboard;
