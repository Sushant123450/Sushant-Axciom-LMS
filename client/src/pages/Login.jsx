import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import image from "../assets/Img.jpg";
const Login = () => {
	const { loading, setLoading, handleLogin, navigate } = useContext(AppContext);
	const [formData, setFormData] = useState({
		uid: "",
		password: "",
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			await handleLogin(formData);
		} catch (err) {
			console.error("Login failed:", err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-around">
			<div className="h-full overflow-hidden">
				<img
					src={image}
					alt="Login Image"
					className="m-5 rounded-lg opacity-70 "
				/>
			</div>
			<div className="bg-gray-200 p-8 m-5 rounded-lg shadow-lg w-full max-w-md">
				<h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
					Login to Axicom LMS
				</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					{/* User ID Input */}
					<div>
						<label
							htmlFor="uid"
							className="block text-sm font-medium text-gray-700"
						>
							User ID
						</label>
						<input
							type="text"
							id="uid"
							value={formData.uid}
							onChange={handleChange}
							placeholder="Enter your User ID"
							className="p-1 block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
						/>
					</div>

					{/* Password Input */}
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="Enter your Password"
							className="p-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
						/>
					</div>

					{/* Submit Button */}
					<div>
						<button
							type="submit"
							className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
							disabled={loading} // Disable button when loading
						>
							{loading ? "Logging in..." : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
