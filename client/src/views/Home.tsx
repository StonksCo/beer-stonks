import { DialogContext } from 'components/dialog/dialog-context';

import React, { useContext } from 'react';

export const Home: React.FC = () => {
	const { open, setOpen } = useContext(DialogContext);

	return (
		<div>
			<h1 className="mb-12 text-5xl font-medium text-gray-900 md:text-5xl lg:text-6xl">
				Let No Man Thirst For Good{' '}
				<span className="text-brly_orange">Beer</span>
			</h1>

			<p className="text-xl font-light">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
				faucibus pretium sit nulla. Quis duis quam euismod blandit lorem
				tristique senulla. Quis duis quam euismod blandit lorem tristique{' '}
			</p>

			{open}
			<button onClick={() => setOpen(true)}>Activate The Dialog</button>
		</div>
	);
};
