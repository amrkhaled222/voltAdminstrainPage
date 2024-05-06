"use client";
import Form from "@/app/_components/Form";
import Dropzone from "@/app/_components/Dropzone";
import { useEffect, useState } from "react";
import RejectedImage from "@/app/_components/RejectedImage";
import AcceptedImage from "@/app/_components/AcceptedImage";
import ImagePreview from "@/app/_components/ImagePreview";
import Image from "next/image";
import removeIcon from "@/app/_assets/remove.png";
import Button from "@/app/_components/Button";
import { useRouter } from "next/navigation";
function ProductDetails() {
	const [rejected, setRejected] = useState([]);
	const [image, setImage] = useState([]);
	const [imagePreview, setImagePreview] = useState(null);
	const [uploadExceed, setUploadExceed] = useState(false);
	const [formData, setFormData] = useState({
		productName: "",
		description: "",
		category: "",
		brandName: "",
		price: "",
		stockQuantity: "",
	});

	useEffect(
		(e) => {
			if (imagePreview == null) {
				return;
			}
			let bol = false;
			image.forEach((e) => {
				bol = e.path == imagePreview.path ? true : bol;
			});

			if (!bol) {
				setImagePreview(null);
			}
		},
		[image]
	);

	const removeImage = (name) => {
		setImage((files) => files.filter((file) => file.name !== name));
	};

	const removeRejected = (name) => {
		setRejected((files) => files.filter(({ file }) => file.name !== name));
	};

	const handleFormdata = (e) => {
		const { name, value } = e.target;

		setFormData((e) => ({
			...e,
			[name]: value,
		}));
	};
	let router = useRouter();
	const handleClickingCancle = () => {
		router.push("/productDetails");
	};

	return (
		<div className=" p-4 container m-auto">
			<div className="bg-white  flex  rounded-xl flex-col lg:flex-row min-h-[80vh]">
				{uploadExceed && (
					<div
						className={`   w-full h-full bg-overlay absolute top-50 z-10 left-0 top-0 flex justify-center items-center`}>
						<div className="flex w-[300px] lg:w-1/3 md:1/2   h-30 text-center p-16 relative  rounded-lg bg-white font-semibold  ">
							can not upload more photo Max 4
							<button
								onClick={() => {
									setUploadExceed(false);
								}}
								className="w-8 h-8 absolute -right-3 -top-3 z-20">
								<Image src={removeIcon}></Image>
							</button>
						</div>
					</div>
				)}

				<Form
					formData={formData}
					formFunc={handleFormdata}
				/>
				<div className=" flex flex-col gap-5 lg:basis-[41%] p-4">
					<ImagePreview ImagePreview={imagePreview}></ImagePreview>

					<h2 className=" capitalize text-xl font-semibold">
						{" "}
						product gallery
					</h2>
					<Dropzone
						setUploadExceed={setUploadExceed}
						setFiles={setImage}
						rejected={rejected}
						setRejected={setRejected}
					/>
					{(image.length > 0 || rejected.length > 0) && (
						<ul className="flex flex-col gap-3 bg-white mt-10   ">
							<AcceptedImage
								setImagePreview={setImagePreview}
								image={image}
								removeFile={removeImage}></AcceptedImage>
							<RejectedImage
								rejected={rejected}
								removeRejected={removeRejected}></RejectedImage>
						</ul>
					)}
					<div className="flex flex-wrap justify-center items-center gap-2">
						<Button
							text={"add"}
							style={" basis-[45%]  py-2 bg-darkBlue text-white "}></Button>

						<Button
							text={"Cancel"}
							handleClicking={handleClickingCancle}
							style={"basis-[45%]  py-2 border-black "}></Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetails;
