import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import WorkflowItem from "./WorkflowItem";
const Dashboard = (props) => {
	const [workflows, setWorkflows] = useState([]);
	const [numWorkflows, setNumWorkflows] = useState(0);

	const handleCreate = () => {
		setWorkflows([
			...workflows,
			{
				num: numWorkflows + 1,
				title: `Workflow ${numWorkflows + 1}`,
				Track: `Interns`,
				Status: `🟢Active`,
			},
		]);
		setNumWorkflows(numWorkflows + 1);
		props.setWorkflowCount(props.workflowCount + 1);
	};

	const handleEdit = (num) => {
		alert(`Edit workflow #${num}`);
	};

	const handleDelete = (num) => {
		setWorkflows(workflows.filter((workflow) => workflow.num !== num));
	};
	const numofWorkflows = workflows.length;
	return (
		<div className="dashboard">
			{workflows.length === 0 ? (
				<>
					<Sidebar numofWorkflows=<span className="count-indi">{0}</span> />
					<div className="single-workflow">
						<button className="create-center" onClick={handleCreate}>
							Create Workflow
						</button>
					</div>
				</>
			) : (
				<>
					<Sidebar
						numofWorkflows=<span className="count-indic">{numofWorkflows}</span>
					/>
					<button className="create-right" onClick={handleCreate}>
						+ Create{" "}
					</button>
					<table>
						<thead>
							<tr>
								<th>#</th>
								<th>Title</th>
								<th>Track</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{workflows.map((workflow) => (
								<WorkflowItem
									key={workflow.num}
									workflow={workflow}
									handleEdit={handleEdit}
									handleDelete={handleDelete}
								/>
							))}
						</tbody>
					</table>
				</>
			)}
		</div>
	);
};

export default Dashboard;
