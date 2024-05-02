import "./globals.css";
import { rubik } from "./font";
import Nav from "./_components/Nav";

export default function RootLayout({ children }) {
	return (
		<html
			className={rubik.className}
			lang="en">
			<body>{children}</body>
		</html>
	);
}
