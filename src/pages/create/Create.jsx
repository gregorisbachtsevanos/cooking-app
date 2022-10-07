import "./Create.css";

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState("");
	const [method, setMethod] = useState("");
	const [cookingTime, setCookingTime] = useState("");
	const [newIngredient, setNewIngredient] = useState("");
	const [ingredient, setIngredient] = useState([]);
	const ingredientInput = useRef(null);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			title,
			method,
			ingredient,
			cookingTime: `${cookingTime} min`,
		};

		const addRecipe = async () => {
			await fetch("http://localhost:3000/recipes", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}).then(() => {
				setTitle("");
				setMethod("");
				setIngredient("");
				setCookingTime("");
				navigate("/");
			});
		};

		addRecipe();
	};

	const addIngredient = (e) => {
		e.preventDefault();
		const ing = newIngredient.trim();

		if (ing && !ingredient.includes(ing)) {
			setIngredient((prevIngredient) => [...prevIngredient, ing]);
		}
		setNewIngredient("");
		ingredientInput.current.focus();
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
				<label>
					<span>Recipe ingredients</span>
					<div className="ingredients">
						<input
							type="text"
							onChange={(e) => setNewIngredient(e.target.value)}
							value={newIngredient}
							ref={ingredientInput}
						/>
						<button className="btn" onClick={addIngredient}>
							add
						</button>
					</div>
				</label>
				<p>
					{ingredient.map((ing) => (
						<i key={ing}>{ing} </i>
					))}
				</p>

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
