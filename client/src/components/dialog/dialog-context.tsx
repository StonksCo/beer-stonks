import { createContext } from 'react';

interface IState {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DialogContext = createContext<IState>({
	open: false,
	setOpen: () => {},
});
