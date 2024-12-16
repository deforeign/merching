import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './globalStyles.css';

import Header from './components/navigation/header/header';
import Home from './pages/home/home';
import About from './pages/about/about';
import Merchandise from './pages/merchandise/merchandise';
import Contact from './pages/contact/contact';
import Register from './pages/register/register';
import SUC from './pages/underConstruction.jsx';

function RoutesConfig() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Navigate to="/merchandise" replace />} />
					<Route path="/merchandise" element={<Merchandise />} />
					<Route path="/home" element={<SUC />} />
					<Route path="/about" element={<SUC />} />
					<Route path="/contact" element={<SUC />} />
					<Route path="/register" element={<SUC />} />
					<Route path="*" element={<SUC />} />
				</Routes>
			</Router>
		</>
	);
}

export default RoutesConfig;