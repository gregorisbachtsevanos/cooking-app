import "./Create.css";

import React, { useState } from "react";

const Create = () => {
	const [title, setTitle] = useState("");
	const [method, setMethod] = useState("");
	const [cookingTime, setCookingTime] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(title, method, cookingTime);
	};

	return (
		<div className="create">
			<h2 className="page-title">Add a new Recipe</h2>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Recipe Title</span>
					<input
						type="text"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						required
					/>
				</label>
				<label>
					<span>Recipe method</span>
					<textarea
						onChange={(e) => setMethod(e.target.value)}
						value={method}
						required
					/>
				</label>

				{/* ingredients */}

				<label>
					<span>Cooking Time</span>
					<input
						type="number"
						onChange={(e) => setCookingTime(e.target.value)}
						value={cookingTime}
						required
					/>
				</label>
				<button className="button">Submit</button>
			</form>
		</div>
	);
};

export default Create;
