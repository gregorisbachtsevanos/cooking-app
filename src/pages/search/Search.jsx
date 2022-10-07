import RecipeList from "../../components/RecipeList";
import "./Search.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
	const queryString = useLocation().search;
	const queryParams = new URLSearchParams(queryString);
	const query = queryParams.get("q");
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const getRecipe = async () => {
			const res = await fetch(`http://localhost:3000/recipes?q=${query}`);
			const data = await res.json();
			setRecipes(data);
		};
		getRecipe();
	}, []);

	return (
		<div className="page-title">
			<h2>{recipes && <RecipeList recipes={recipes} />}</h2>
		</div>
	);
};

export default Search;
