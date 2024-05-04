"use client";
import ProductData from "@/app/_components/product.json";
import Form from "@/app/_components/Form";

import { useState } from "react";

function AddProduct(props) {
	const [formData, setFormData] = useState({
		productName: "",
		description: "",
		category: "",
		brandName: "",
		price: "",
		stockQuantity: "",
	});

	const handleFormdata = (e) => {
		const { name, value } = e.target;

		setFormData((e) => ({
			...e,
			[name]: value,
		}));
	};
	return (
		<div className=" p-4 container">
			<div className="bg-white flex  rounded-xl flex-col lg:flex-row		">
				<Form
					formData={formData}
					formFunc={handleFormdata}
				/>
			</div>
		</div>
	);
}

export default AddProduct;
