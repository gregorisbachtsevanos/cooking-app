import './Recipe.css';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';

const Recipe = () => {
	const [recipe, setRecipe] = useState('');
	const { id } = useParams();
	const [recipes, setRecipes] = useState([]);
	const [error, setError] = useState(false);
	const [isPending, setIsPending] = useState(false);

	useEffect(() => {
		setIsPending(true);

		projectFirestore
			.collection('recipes')
			.doc(id)
			.get()
			.then((doc) => {
				if (doc.exists) {
					setIsPending(false);
					setRecipe(doc.data());
				} else {
					setIsPending(false);
					setError('Could not find that recipe');
				}
			})
			.catch((err) => {
				setIsPending(false);
				setError(err.message);
			});
	}, [id]);

	return (
		<div>
			<div className="loading">{isPending && <p>Loading...</p>}</div>
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
