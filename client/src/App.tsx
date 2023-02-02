import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { DialogWrapper } from 'components/dialog';
import { NavbarWrapper } from 'components/navbar-wrapper';
import { AppRoute, routes } from 'routes';
import { PageNotFound } from 'views/PageNotFound';

import './App.scss';
import { DialogContext } from 'components/dialog/dialog-context';

export const App: React.FC = () => {
	const getRoutes = (routes: AppRoute[]) =>
		routes.map((prop, key) => (
			<Route key={key} path={prop.path} element={<prop.element />} />
		));

	const [open, setOpen] = useState(false);
	const value = useMemo(() => ({ open, setOpen }), [open]);

	return (
		<>
			<DialogContext.Provider value={value}>
				<NavbarWrapper routes={routes} />
				<div className="container mt-16 mx-auto">
					<Routes>
						{getRoutes(routes)}
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</div>

				<DialogWrapper />
			</DialogContext.Provider>
		</>
	);
};
