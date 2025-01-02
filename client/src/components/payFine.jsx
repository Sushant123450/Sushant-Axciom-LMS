import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const PayFine = () => {
	const { overdue, getOverDue, payFine } = useContext(AppContext);
	const [issueId, setIssueId] = useState("");
	const [fineDetails, setFineDetails] = useState(null);
	const [showDialog, setShowDialog] = useState(false);

	const handleChange = (e) => {
		setIssueId(e.target.value);
	};
	useEffect(() => {
		if (overdue.length == 0) {
			getOverDue();
		}
	}, [overdue, getOverDue]);

	const handlePayNowClick = () => {
		console.log(overdue);

		const details = overdue.find((item) => item.id === issueId.trim());
		if (details) {
			setFineDetails(details);
			setShowDialog(true);
		} else {
			alert("Invalid Issue ID");
		}
	};

	const handleConfirmPayment = () => {
		const data = { issueId };
		payFine(data);
		// alert("Payment Successful!");
		setShowDialog(false);
	};

	const handleCloseDialog = () => {
		alert("Payment Failed!! Please pay you fine soon");
		setShowDialog(false);
	};

	return (
		<div className="p-6 bg-blue-100 shadow-lg rounded-lg">
			<h2 className="text-2xl font-semibold text-center mb-6">Pay Fine</h2>
			<form className="space-y-4">
				<div>
					<label className="block text-base font-medium text-gray-700">
						Issue ID
					</label>
					<input
						type="text"
						name="issueId"
						value={issueId}
						onChange={handleChange}
						placeholder="Enter Issue ID"
						required
						className="mt-1 w-full p-2 text-base border rounded-md focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<button
					type="button"
					onClick={handlePayNowClick}
					className="px-4 py-2 text-base bg-blue-600 text-white rounded-md hover:bg-blue-700"
				>
					Pay Now
				</button>
			</form>

			{/* Dialog Box */}
			{showDialog && fineDetails && (
				<div className="dialog-overlay py-6 ">
					<div className="dialog-box ">
						<h2 className="text-xl font-semibold">Fine Details</h2>
						<p>
							<strong>Title: </strong>
							{fineDetails.name}
						</p>
						<p>
							<strong>Fine Amount: </strong>${fineDetails.fine}
						</p>

						<div className="flex justify-between mt-4">
							<button
								onClick={handleConfirmPayment}
								className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
							>
								Confirm Payment
							</button>
							<button
								onClick={handleCloseDialog}
								className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PayFine;
