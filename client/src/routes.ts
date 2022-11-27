import React from 'react';
import { About } from './views/About';
import { Calculator } from './views/Calculator';
import { Home } from './views/Home';
import { PageNotFound } from './views/PageNotFound';
import { Stocks } from './views/Stocks';

export interface AppRoute {
	path: string;
	name: string;
	element: React.FC;
}

export const routes: AppRoute[] = [
	{
		path: '/home',
		name: 'Home',
		element: Home,
	},
	{
		path: '/about',
		name: 'About',
		element: About,
	},
	{
		path: '/stocks',
		name: 'Stocks',
		element: Stocks,
	},
	{
		path: '/calculator',
		name: 'Calculator',
		element: Calculator,
	},
	{
		path: '*',
		name: 'PageNotFound',
		element: PageNotFound,
	},
];
