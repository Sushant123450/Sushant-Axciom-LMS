import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const ItemIssueForm = () => {
	const today = new Date().toISOString().split("T")[0];
	const { issueItem } = useContext(AppContext);
	const [formData, setFormData] = useState({
		itemId: "",
		author: "",
		issueDate: today,
		returnDate: "",
		remarks: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { itemId, author, issueDate, returnDate, remarks } = formData;

		if (!itemId || !author || !issueDate || !returnDate) {
			alert("Please fill out all required fields.");
			return;
		}

		const data = {
			itemId,
			author,
			issueDate,
			returnDate,
			remarks,
		};

		issueItem(data);
		// Process form data submission (e.g., API call)
		console.log("Form Data Submitted:", data);
		alert("Item Issued Successfully!");

		// Reset form
		setFormData({
			itemId: "",
			author: "",
			issueDate: today,
			returnDate: "",
			remarks: "",
		});
	};

	return (
		<div className=" p-6 bg-blue-100 shadow-lg rounded-lg">
			<h2 className="text-2xl font-semibold text-center mb-6">
				Item Issue Form
			</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block text-base font-medium text-gray-700">
						Item ID
					</label>
					<input
						type="text"
						name="itemId"
						value={formData.itemId}
						onChange={handleChange}
						placeholder="Enter Item ID"
						required
						className="mt-1 w-full p-2 text-base border rounded-md focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div>
					<label className="block text-base font-medium text-gray-700">
						Issuer Name
					</label>
					<input
						type="text"
						name="author"
						placeholder="Enter Name"
						value={formData.author}
						onChange={handleChange}
						required
						className="mt-1 w-full p-2 text-base border rounded-md focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-base font-medium text-gray-700">
						Issue Date
					</label>
					<input
						type="date"
						name="issueDate"
						value={formData.issueDate}
						onChange={handleChange}
						required
						className="mt-1 p-2 text-base w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div>
					<label className="block text-base font-medium text-gray-700">
						Return Date
					</label>
					<input
						type="date"
						name="returnDate"
						value={formData.returnDate}
						onChange={handleChange}
						required
						className="mt-1 w-full text-base p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div>
					<label className="block text-base font-medium text-gray-700">
						Remarks
					</label>
					<textarea
						name="remarks"
						value={formData.remarks}
						onChange={handleChange}
						rows="3"
						className="mt-1 w-full p-2 text-base border rounded-md focus:ring-2 focus:ring-blue-500"
					></textarea>
				</div>

				<div className="flex justify-between mt-6">
					<button
						type="button"
						onClick={() =>
							setFormData({
								itemId: "",
								author: "",
								issueDate: today,
								returnDate: "",
								remarks: "",
							})
						}
						className="px-4 py-2 text-base bg-gray-400 text-white rounded-md hover:bg-gray-500"
					>
						Reset
					</button>
					<button
						type="submit"
						className="px-4 py-2 text-base bg-blue-600 text-white rounded-md hover:bg-blue-700"
					>
						Confirm
					</button>
				</div>
			</form>
		</div>
	);
};

export default ItemIssueForm;
