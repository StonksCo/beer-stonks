import React from 'react';
import { NavLink } from 'react-router-dom';

import { AppRoute } from 'routes';

interface Props {
	route: AppRoute;
}

export const NavbarItem: React.FC<Props> = ({ route }) => {
	return (
		<li>
			<NavLink
				to={route.path}
				className={({ isActive }) =>
					[
						'block py-2 pl-3 pr-4  hover:text-brly_orange dark:text-slate-50',
						isActive ? 'text-brly_orange' : 'text-gray-800',
					].join(' ')
				}
			>
				{route.name}
			</NavLink>
		</li>
	);
};
