import './Home.css';
import React, { useEffect, useState } from 'react';
import RecipeList from '../../components/RecipeList';
import { projectFirestore } from '../../firebase/config';

const Home = () => {
	const [recipes, setRecipes] = useState([]);
	const [error, setError] = useState(false);
	const [isPending, setIsPending] = useState(false);

	useEffect(() => {
		setIsPending(true);

		const unsub = projectFirestore
			.collection('recipes')
			.onSnapshot((snapshot) => {
				setRecipes(snapshot.docs);
				if (snapshot.empty) {
					setError('No recipes to load');
					setIsPending(false);
				} else {
					let result = [];
					snapshot.docs.forEach((doc) => {
						result.push({ id: doc.id, ...doc.data() });
					});
					setRecipes(result);
					setIsPending(false);
				}
			}, (err)	=> {
				setError(err.message)
				setIsPending(false);
			})

			return () => unsub()
	}, []);

	return (
		<div className="home">
			{isPending && <p className='loading'>loading...</p>}
			{error && <p className="error">{error}</p>}
			{recipes && <RecipeList recipes={recipes} />}
		</div>
	);
};

export default Home;
