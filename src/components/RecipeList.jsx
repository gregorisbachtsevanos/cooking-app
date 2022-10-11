import { Link } from "react-router-dom";
import { projectFirestore } from '../firebase/config';

import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
	if (recipes.length === 0) {
		return <div className="error">No recipes to load...</div>;
	}

	const deleteRecipe = (id) => {
		projectFirestore.collection('recipes').doc(id).delete()
		console.log(id)
	}

	return (
		<div className="recipe-list">
			{recipes.map((recipe) => {
				return (
					<div key={recipe.id} className="card">
						<h3>{recipe.title}</h3>
						<p>{recipe.cookingTime} to make</p>
						<p>{recipe.method.substring(0, 100)}...</p>
						<Link to={`recipes/${recipe.id}`}>Cook this</Link>
						<p className="delete" onClick={() => deleteRecipe(recipe.id)}>x</p>
					</div>
				);
			})}
		</div>
	);
};

export default RecipeList;
