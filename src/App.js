import "./App.css";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
	const [workflowCount, setWorkflowCount] = useState(0);
	return (
		<div className="App">
			{/* <Sidebar workflowCount={workflowCount} /> */}
			<Dashboard setWorkflowCount={setWorkflowCount} />
		</div>
	);
}

export default App;
