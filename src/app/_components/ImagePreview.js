import Image from "next/image";
export default function ImagePreview({ ImagePreview }) {
	return (
		<>
			{ImagePreview != null && (
				<div className="flex gap-2 min-h-[380px] rounded-lg justify-center items-center p-3 ">
					<Image
						width={30}
						height={30}
						src={ImagePreview.preview}
						alt={ImagePreview.name}
						// onLoad={() => {
						// 	URL.revokeObjectURL(ImagePreview.preview);
						// }}
						className=" w-full h-full rounded-md"
					/>
				</div>
			)}
			{ImagePreview == null && (
				<div className="flex gap-2 min-h-[380px] bg-[rgb(0,0,0,0.2)] rounded-lg justify-center items-center p-3 "></div>
			)}
		</>
	);
}
