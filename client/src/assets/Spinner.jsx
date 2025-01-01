import React from "react";
import "../assets/Spinner.css";
const Spinner = () => {
	return (
		<div className="relative left-[50%] top-[50%] opacity-60">
			<div className="book">
				<div className="book__pg-shadow"></div>
				<div className="book__pg"></div>
				<div className="book__pg book__pg--2"></div>
				<div className="book__pg book__pg--3"></div>
				<div className="book__pg book__pg--4"></div>
				<div className="book__pg book__pg--5"></div>
			</div>
		</div>
	);
};

export default Spinner;
