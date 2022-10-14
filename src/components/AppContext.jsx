import { createContext, useState } from 'react';

const AppContext = createContext();

export default function AppProvider(props) {
	const [theme, setTheme] = useState('dark');
	const [currency, setCurrency] = useState('USD');

	const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

	const value = { theme, currency, setCurrency, toggleTheme };

	return (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	);
}

export { AppContext, AppProvider };
