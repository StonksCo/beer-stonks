import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { NavbarWrapper } from 'components/navbar-wrapper';
import { AppRoute, routes } from 'routes';
import { PageNotFound } from 'views/PageNotFound';

import './App.scss';

export const App: React.FC = () => {
	const getRoutes = (routes: AppRoute[]) =>
		routes.map((prop, key) => (
			<Route key={key} path={prop.path} element={<prop.element />} />
		));

	return (
		<>
			<NavbarWrapper routes={routes} />
			<div className="container mt-16 mx-auto">
				<Routes>
					{getRoutes(routes)}
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</div>
		</>
	);
};
