import Nav from "../_components/Nav";

export default function RootLayout({ children }) {
	return (
		<>
			<Nav></Nav>
			{children}
		</>
	);
}
