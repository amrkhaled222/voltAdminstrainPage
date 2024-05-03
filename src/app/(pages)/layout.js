"use client";
import { useState, useRef, useEffect } from "react";
import Nav from "../_components/Nav";
import notification from "../_assets/notification.png";
import Image from "next/image";
import downArrowActive from "../_assets/downArrowActive.png";
import downArrowNonActive from "../_assets/downArrowNonActive.png";
import MobileNav from "../_components/MobileNav";
import Link from "next/link";
import nextIcon from "../_assets/next.png";
import logOutIcon from "../_assets/logOut.png";

export default function RootLayout({ children }) {
	const [AdminActive, toogleAdmin] = useState(false);

	const handleAdminButton = () => {
		toogleAdmin((e) => !e);
	};

	// when click outside close account menu
	const AdminRef = useRef(0);

	useEffect(() => {
		if (!AdminActive) return;

		const handleOutSideClick = (event) => {
			if (AdminRef.current && !AdminRef.current.contains(event.target)) {
				toogleAdmin(() => false);
			}
		};

		window.addEventListener("click", handleOutSideClick);
		return () => {
			window.removeEventListener("click", handleOutSideClick);
		};
	}, [AdminActive]);

	//end
	return (
		<main className=" m-auto md:grid md:grid-cols-[260px,1fr] max-w-[1440px] ">
			<Nav></Nav>

			<div className=" relative">
				<header className="  shadow-md  relative ">
					<div className=" flex md:justify-end items-center justify-between m-auto p-2 md:p-5 container md:mr-auto  z-10">
						<div>
							<MobileNav></MobileNav>
						</div>
						<div className="flex gap-4 items-center ">
							<Image
								alt="notification"
								className=" w-6 h-6"
								src={notification}></Image>
							<div
								ref={AdminRef}
								className="uppercase">
								<div
									onClick={handleAdminButton}
									className={`flex px-4 py-2 uppercase rounded-md  items-center gap-1  border-2 cursor-pointer ${
										AdminActive
											? "bg-darkBlue text-white border-darkBlue   "
											: "border-black"
									} `}>
									Admin
									<Image
										alt="downArrow"
										className=" w-4 h-4"
										src={
											AdminActive ? downArrowActive : downArrowNonActive
										}></Image>
								</div>
								<div
									className={`w-1/4 sm:w-[230px]  absolute bg-white ${
										AdminActive ? "flex" : "hidden"
									}  flex-col  top-28 right-8 text-black  z-20 p-4 rounded-md text-sm w-1/2   lg:gap-4 gap-2 `}>
									<h2 className=" font-medium capitalize p-1">Admin</h2>
									<Link
										href={""}
										className="flex items-center justify-between p-1">
										change password{" "}
										<Image
											src={nextIcon}
											alt="arrowIcon"
											className="w-4 h-4"></Image>
									</Link>
									<Link
										className="flex items-center justify-between p-1"
										href={""}>
										log out{" "}
										<Image
											className="w-4 h-4"
											src={logOutIcon}
											alt="logOut"></Image>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div className="relative">
					{/* make over lay*/}
					<div
						className={`h-svh w-full bg-black opacity-40  absolute top-0 ${
							AdminActive ? "block" : "hidden"
						} z-10`}></div>
					{children}
					<footer></footer>
				</div>
			</div>
		</main>
	);
}
