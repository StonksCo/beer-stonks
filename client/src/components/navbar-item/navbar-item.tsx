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
				className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
			>
				{route.name}
			</Link>
		</li>
	);
};
