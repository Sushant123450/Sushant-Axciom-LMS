import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const ItemAvailability = () => {
	const { items } = useContext(AppContext);
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [selectedItem, setSelectedItem] = useState(null);
	const [highlightIndex, setHighlightIndex] = useState(-1);

	const handleSearchChange = (e) => {
		const query = e.target.value;
		setSearchQuery(query);
		setHighlightIndex(-1);

		if (query.length > 0) {
			const filteredSuggestions = items.filter(
				(item) =>
					item.itemId.toLowerCase().includes(query.toLowerCase().trim()) ||
					item.name.toLowerCase().includes(query.toLowerCase().trim())
			);
			setSuggestions(filteredSuggestions);
		} else {
			setSuggestions([]);
		}
	};

	const handleSuggestionClick = (item) => {
		setSearchQuery(item.itemId || item.name);
		setSelectedItem(item);
		setSuggestions([]);
		setHighlightIndex(-1);
	};

	const handleKeyDown = (e) => {
		if (suggestions.length > 0) {
			if (e.key === "ArrowDown") {
				// Navigate down the suggestions
				setHighlightIndex((prevIndex) =>
					prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
				);
			} else if (e.key === "ArrowUp") {
				// Navigate up the suggestions
				setHighlightIndex((prevIndex) =>
					prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
				);
			} else if (e.key === "Enter" && highlightIndex >= 0) {
				// Select the highlighted suggestion on Enter
				handleSuggestionClick(suggestions[highlightIndex]);
			}
		}
	};

	const handleCheckAvailability = () => {
		const foundItem = items.find(
			(item) =>
				item.itemId.toLowerCase() === searchQuery.toLowerCase().trim() ||
				item.name.toLowerCase() === searchQuery.toLowerCase().trim()
		);

		if (foundItem) {
			setSelectedItem(foundItem);
		} else {
			setSelectedItem(null);
			alert("No item exists or the item is unavailable.");
		}
	};

	return (
		<div className="p-6 bg-blue-100 shadow-lg rounded-lg">
			<h2 className="text-2xl font-semibold text-center mb-6">
				Item Availability Checker
			</h2>
			<div className="space-y-4">
				<div>
					<label className="block text-base font-medium text-gray-700">
						Search Item
					</label>
					<input
						type="text"
						value={searchQuery}
						onChange={handleSearchChange}
						onKeyDown={handleKeyDown}
						className="mt-1 w-full p-2 text-base border rounded-md focus:ring-2 focus:ring-blue-500"
						placeholder="Enter Item ID or Name"
					/>
					{suggestions.length > 0 && (
						<ul className="mt-2 border rounded-md bg-white shadow-lg">
							{suggestions.map((item, index) => (
								<li
									key={item.itemId}
									className={`p-2 cursor-pointer ${
										index === highlightIndex ? "bg-gray-200" : ""
									}`}
									onClick={() => handleSuggestionClick(item)}
								>
									{item.itemId} - {item.name} ({item.itemType})
								</li>
							))}
						</ul>
					)}
				</div>

				<div className="flex justify-end">
					<button
						onClick={handleCheckAvailability}
						className="px-4 py-2 text-base bg-blue-600 text-white rounded-md hover:bg-blue-700"
					>
						Check Availability
					</button>
				</div>

				{selectedItem ? (
					<div className="mt-6 p-4 border rounded-md bg-green-100">
						<h3 className="text-lg font-semibold mb-2">Item Details:</h3>
						<p>
							<strong>Item ID:</strong> {selectedItem.itemId}
						</p>
						<p>
							<strong>Item Name:</strong> {selectedItem.name}
						</p>
						<p>
							<strong>Status:</strong>{" "}
							{selectedItem.quantity > 0 ? "Available" : "Not Available"}
						</p>
					</div>
				) : (
					searchQuery && (
						<div className="mt-6 p-4 border rounded-md bg-red-100">
							<p>No item exists with the provided search query.</p>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default ItemAvailability;
