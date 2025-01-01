import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../assets/Spinner";

const MasterListOfMemberships = () => {
	const { masterMemberships, getMemberships, loading } = useContext(AppContext);

	useEffect(() => {
		if (masterMemberships.length == 0) {
			getMemberships();
		}
	}, [masterMemberships, getMemberships]);

	return (
		<div className="max-w-7xl p-6 bg-gray-800 text-gray-600 shadow-lg rounded-lg">
			<h1 className="text-3xl font-semibold text-center mb-6">
				Master List of Memberships
			</h1>

			{loading ? (
				<div className="flex justify-center">
					<div>
						<Spinner />
					</div>
				</div>
			) : (
				<table className="w-[95%] mx-auto bg-white border">
					<thead>
						<tr className=" bg-gray-700 text-gray-100 uppercase text-base leading-normal">
							<th className="py-3 px-3 text-left">Membership Id</th>
							<th className="py-3 px-3 text-left">Name</th>
							<th className="py-3 px-3 text-left">Contact Number</th>
							<th className="py-3 px-3 text-left">Contact Address</th>
							<th className="py-3 px-3 text-left">StartDate of Membership</th>
							<th className="py-3 px-3 text-left">EndDate of Membership</th>
							<th className="py-3 px-3 text-left">Status</th>
						</tr>
					</thead>

					<tbody className="text-gray-600 text-sm">
						{masterMemberships.map((item, index) => (
							<tr
								key={index}
								className="border-b-2 bg-blue-200 text-black font-normal border-gray-100 hover:bg-gray-100"
							>
								<td className="py-3 px-3 text-left whitespace-nowrap">
									{item.id}
								</td>

								<td className="py-3 px-3 text-left">{item.name}</td>
								<td className="py-3 px-3 text-left">{item.contactNumber}</td>
								<td className="py-3 px-3 text-left">{item.address}</td>
								<td className="py-3 px-3 text-left">{item.startDate}</td>
								<td className="py-3 px-3 text-left">{item.endDate}</td>
								<td className="py-3 px-3 text-left">{item.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default MasterListOfMemberships;
