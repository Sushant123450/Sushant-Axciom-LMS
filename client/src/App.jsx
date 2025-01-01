import { useEffect, useContext, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import AddMembership from "./components/AddMembership.jsx";
import UpdateMembership from "./components/UpdateMembership.jsx";
import AddItem from "./components/Additem.jsx";
import UpdateItem from "./components/Updateitem.jsx";
import UserManagement from "./components/UserManagement.jsx";
import MasterListOfMemberships from "./components/MasterListOfMemberships.jsx";
import IssueRequests from "./components/IssueRequests.jsx";
import MasterListMovies from "./components/MasterListItems.jsx";
import Dashboard from "./pages/dashboard.jsx";
import TopNavBar from "./components/TopNavBar.jsx";
import MaintenanceBar from "./pages/MaintenanceBar.jsx";
import ReportsBar from "./pages/ReportsBar.jsx";
import TransactionBar from "./pages/TransactionBar.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import { AppContext } from "./context/AppContext.jsx";

function App() {
	const location = useLocation();
	const { items, getHomeData, cookies, navigate } = useContext(AppContext);

	const [hideTopNavBar, setHideTopNavBar] = useState(false);

	const ProtectedRoute = ({ element }) => {
		if (!cookies.token) {
			navigate("/");
		}
		return element;
	};

	useEffect(() => {
		setHideTopNavBar(location.pathname === "/" || location.pathname === "*");
	}, [location.pathname]);

	useEffect(() => {
		if (items.length === 0) {
			getHomeData(); // Fetch only if not already done
		}
	}, [items, getHomeData]);

	return (
		<div className="bg-slate-950 h-screen w-screen m-0 overflow-hidden">
			{!hideTopNavBar && <TopNavBar />}
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/dashboard"
					element={<ProtectedRoute element={<Dashboard />} />}
				/>
				<Route
					path="/maintenance"
					element={<ProtectedRoute element={<MaintenanceBar />} />}
				/>
				<Route
					path="/issuerequests"
					element={<ProtectedRoute element={<IssueRequests />} />}
				/>
				<Route
					path="/masterlistOfmemberships"
					element={<ProtectedRoute element={<MasterListOfMemberships />} />}
				/>
				<Route
					path="/masterlistmovies"
					element={<ProtectedRoute element={<MasterListMovies />} />}
				/>
				<Route
					path="/addmembership"
					element={<ProtectedRoute element={<AddMembership />} />}
				/>
				<Route
					path="/updatemembership"
					element={<ProtectedRoute element={<UpdateMembership />} />}
				/>
				<Route
					path="/additem"
					element={<ProtectedRoute element={<AddItem />} />}
				/>
				<Route
					path="/updateitem"
					element={<ProtectedRoute element={<UpdateItem />} />}
				/>
				<Route
					path="/reports"
					element={<ProtectedRoute element={<ReportsBar />} />}
				/>
				<Route
					path="/transactions"
					element={<ProtectedRoute element={<TransactionBar />} />}
				/>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
