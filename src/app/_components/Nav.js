"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import dasboardIcon from "../_assets/dashboardIcon.png";
export default function Nav() {
	let linkStyling =
		"flex uppercase  text-sm hover:scale-95 py-4 rounded-md duration-300  ";

	const pathname = usePathname();
	console.log(pathname);
	return (
		<>
			<nav className=" flex flex-col bg-mainBg h-svh max-w-[260px] px-5 py-7 gap-3 rounded-sm shadow-md   ">
				<h1 className="text-darkBlue font-semibold text-4xl">Volt</h1>
				<Link
					href={"./dashboard"}
					className={`${linkStyling} ${
						pathname == "/dashboard"
							? "bg-darkBlue text-white px-2"
							: "text-darkGrey"
					}`}>
					dashboard
				</Link>
				<Link
					href={"./allProduct"}
					className={`${linkStyling} ${
						pathname == "/allProduct"
							? "bg-darkBlue text-white px-2"
							: "text-darkGrey"
					}`}>
					all products
				</Link>
				<Link
					href={"./orderList"}
					className={`${linkStyling} ${
						pathname == "/orderList"
							? "bg-darkBlue text-white px-2"
							: "text-darkGrey"
					}`}>
					order list
				</Link>
				<Link
					href={"./customers"}
					className={`${linkStyling} ${
						pathname == "/customers"
							? "bg-darkBlue text-white px-2"
							: "text-darkGrey"
					}`}>
					customers
				</Link>
			</nav>
		</>
	);
}
