import { inter } from "../font";
export default function Form({ formData, formFunc }) {
	let inputStyle =
		"border border-black focus:outline-none focus:border-black  rounded-md p-[7px] ${inter.className} w-full";
	let lableStyle = " font-semibold text-lg capitalize";
	let parentDivStyle = "flex flex-col gap-3";
	return (
		<div className=" lg:basis-[59%]">
			<form
				method="post"
				className="flex flex-col p-4  gap-5 ">
				<div className={parentDivStyle}>
					<label
						className={lableStyle}
						htmlFor="productName">
						{" "}
						product name
					</label>
					<input
						placeholder="Type name here"
						className={inputStyle}
						value={formData.productName}
						name="productName"
						id="productName"
						onChange={(e) => {
							formFunc(e);
						}}></input>
				</div>

				<div className={parentDivStyle}>
					<label
						className={lableStyle}
						htmlFor="description">
						description
					</label>
					<textarea
						className={inputStyle + " min-h-[140px]"}
						placeholder="Type Description here"
						value={formData.description}
						name="description"
						id="description"
						onChange={(e) => {
							formFunc(e);
						}}></textarea>
				</div>

				<div className={parentDivStyle}>
					<label
						className={lableStyle}
						htmlFor="category">
						{" "}
						category
					</label>
					<input
						className={inputStyle}
						placeholder="Type Category here"
						value={formData.category}
						name="category"
						id="category"
						onChange={(e) => {
							formFunc(e);
						}}></input>
				</div>
				<div className={parentDivStyle}>
					<label
						className={lableStyle}
						htmlFor="brandName">
						{" "}
						Brand name
					</label>
					<input
						className={inputStyle}
						placeholder="Type brand name here"
						value={formData.brandName}
						name="brandName"
						id="brandName"
						onChange={(e) => {
							formFunc(e);
						}}></input>
				</div>
				<div className="sm:grid sm:grid-cols-2 flex flex-col gap-3 items-center">
					<div className={parentDivStyle + " w-full"}>
						<label
							className={lableStyle}
							htmlFor="price">
							{" "}
							Price
						</label>
						<input
							className={inputStyle}
							id="price"
							placeholder="₹1000"
							value={formData.price}
							name="price"
							onChange={(e) => {
								formFunc(e);
							}}></input>
					</div>
					<div className={parentDivStyle + " w-full"}>
						<label
							className={lableStyle}
							htmlFor="stock">
							{" "}
							Stock Quantity
						</label>
						<input
							className={inputStyle + "basis-1/2"}
							placeholder="1258"
							id="stock"
							value={formData.price}
							name="stockQuantity"
							onChange={(e) => {
								formFunc(e);
							}}></input>
					</div>
				</div>
			</form>
		</div>
	);
}
