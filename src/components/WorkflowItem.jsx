import React from "react";

const WorkflowItem = ({ workflow, handleEdit, handleDelete }) => (
	<tr>
		<td>{workflow.num}</td>
		<td>{workflow.title}</td>
		<td>
			<p>{workflow.Track}</p>
		</td>
		<td>
			<p>{workflow.Status}</p>
		</td>
		<td>
			<button onClick={() => handleEdit(workflow.num)}>Edit</button>
			<button onClick={() => handleDelete(workflow.num)}>Delete</button>
		</td>
	</tr>
);

export default WorkflowItem;
