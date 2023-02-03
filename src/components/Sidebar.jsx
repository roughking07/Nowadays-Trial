import React from "react";
import profilepicture from "../components/download.png";
const Sidebar = (props) => {
	const { numofWorkflows } = props;
	return (
		<div className="sidebar">
			<div className="logo">[ ] Nowadays</div>
			<div className="profile-picture">
				<img src={profilepicture} alt="profile" />
			</div>
			<div className="greeting">Hello, Admin!</div>
			<div className="navigation">
				<div className="nav-item">
					Workshops <span>{numofWorkflows}</span>
				</div>
				<div className="nav-item">
					Recipients <span className="count-indi">{43}</span>
				</div>
				<div className="nav-item">
					Email Templates <span className="count-indi">{3}</span>
				</div>
			</div>
			<button className="logout-button" onClick={() => alert("Log out user")}>
				Logout
			</button>
		</div>
	);
};
export default Sidebar;
