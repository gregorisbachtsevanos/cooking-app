import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'

import './App.css';
import { useTheme } from './hooks/useTheme'
import ThemeSelector from './components/ThemeSelector'

function App() {
	const { bgColor } = useTheme()

	return (
		<div className="App" style={{ backgroundColor: bgColor, transition: ".5s" }}>
			<BrowserRouter>
				<NavBar />
				<ThemeSelector />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/create' element={<Create />} />
					<Route path='/recipes/:id' element={<Recipe />} />
					<Route path='/search' element={<Search />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
