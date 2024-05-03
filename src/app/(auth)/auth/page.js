"use client";
import Link from "next/link";
import { opensans } from "../../font";
import { useState, useEffect } from "react";

export default function Auth() {
	let inputStyling =
		"border-darkgrey border-2 p-2 rounded-lg focus:border-darkgrey  caret-darkBlue focus:outline-none  ";
	const [keepmelogin, setmelogin] = useState(false);
	console.log(keepmelogin);

	useEffect((e) => {
		let keeplogin =
			localStorage.getItem("keepmelogined") == null
				? false
				: localStorage.getItem("keepmelogined");
		setmelogin(JSON.parse(keeplogin));
	}, []);

	const handleCheckBox = () => {
		setmelogin((e) => {
			localStorage.setItem("keepmelogined", JSON.stringify(!keepmelogin));
			return !e;
		});
	};
	return (
		<div className="w-full h-svh bg-mainBg">
			<div className="w-full h-svh flex justify-center items-center container m-auto   ">
				<div className="flex flex-col xl:w-1/3 md:w-1/2 w-[80%] gap-5  ">
					<div className="flex flex-col gap-1">
						<h2 className=" m-0 font-bold text-3xl">Login</h2>
						<Link
							className={`  text-md ${opensans.className} text-seconderyItemColor`}
							href={""}>
							Forgot your password?
						</Link>
					</div>

					<form
						method="post "
						className="flex flex-col justify-center  text-start gap-4 ">
						<input
							className={`${inputStyling}`}
							type="email"
							name="email"
							placeholder="email"></input>
						<input
							className={`${inputStyling}`}
							type="password"
							name="password"
							autoComplete="new-password"
							placeholder="password"></input>

						<div>
							<input
								type="checkbox"
								name="checkbox"
								id="checkbox"
								checked={keepmelogin}
								onChange={handleCheckBox}></input>

							<label htmlFor="checkbox"> keep me logged in </label>
						</div>
						<input
							className=" bg-darkBlue p-2  capitalize text-white rounded-lg text-center "
							type="submit"
							value="login"></input>
					</form>
				</div>
			</div>
		</div>
	);
}
