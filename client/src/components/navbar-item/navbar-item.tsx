import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routes';

interface Props {
	route: AppRoute;
}

export const NavbarItem: React.FC<Props> = ({ route }) => {
	return (
		<li>
			<Link
				to={route.path}
				className="block py-2 pl-3 pr-4 text-gray-800 hover:text-brly_orange dark:text-slate-50"
			>
				{route.name}
			</Link>
		</li>
	);
};
