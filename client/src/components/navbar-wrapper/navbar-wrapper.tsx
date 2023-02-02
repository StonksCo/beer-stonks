import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/icons/logo.png';
import { NavbarItem } from 'components/navbar-item';
import { AppRoute } from 'routes';

interface Props {
	routes: AppRoute[];
}

export const NavbarWrapper: React.FC<Props> = ({ routes }) => {
	const routeItems = routes.map((route, key) => (
		<NavbarItem key={key} route={route} />
	));

	return (
		<nav className="border-gray-200 px-2 sm:px-4 py-2.5">
			<div className="container flex items-center justify-between mx-auto">
				<Link to="/">
					<img src={logo} className="w-32" alt="Beerly Logo" />
				</Link>
				<div className="w-auto" id="navbar-default">
					<ul className="flex rounded-lg font-medium text-sm">{routeItems}</ul>
				</div>
				<button
					type="button"
					className="h-8 w-32 flex items-center justify-center font-medium text-sm text-white border-brly_orange bg-brly_orange focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5"
				>
					Sign Up
				</button>
			</div>
		</nav>
	);
};
