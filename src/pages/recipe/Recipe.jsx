import "./Recipe.css";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
	const [recipe, setRecipe] = useState("");
	const [error, setError] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const getRecipe = async () => {
			const res = await fetch("http://localhost:3000/recipes/" + id);
			const data = await res.json();

			if (!res.ok) setError("Not Found");

			setRecipe(data);
		};

		getRecipe();
	}, [id]);
	console.log(recipe);
	return (
		<div>
			<div className="error">{error && <p>{error}</p>}</div>
			<div className="recipe">
				{recipe && (
					<Fragment>
						<h2 className="page-title">{recipe.title}</h2>
						<p>Takes {recipe.cookingTime} to make</p>
						<ul>
							{recipe.ingredients.map((ingredient, index) => (
								<li key={index}>{ingredient}</li>
							))}
						</ul>
						<p className="method">{recipe.method}</p>
					</Fragment>
				)}
			</div>
		</div>
	);
};

export default Recipe;
