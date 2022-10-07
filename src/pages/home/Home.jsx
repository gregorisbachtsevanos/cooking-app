import "./Home.css";
import React, { useEffect, useState } from "react";
import RecipeList from "../../components/RecipeList";

const Home = () => {
	const [recipes, setRecipes] = useState([]);
	const [error, setError] = useState(null);
	useEffect(() => {
		const getRecipe = async () => {
			const res = await fetch("http://localhost:3000/recipes");
			const data = await res.json();
			if (!res.ok) {
				return setError("error");
			}
			setRecipes(data);
		};

		getRecipe();
	}, []);

	console.log(recipes);

	return (
		<div className="home">
			{error && <p className="error">{error}</p>}
			{recipes && <RecipeList recipes={recipes} />}
		</div>
	);
};

export default Home;
