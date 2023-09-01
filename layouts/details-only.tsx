import React from "react";

function DetailsOnly({
	children,
	whiteText,
	className,
	bgImg,
	bgImgAlt,
	bgOpacity,
}: {
	children: React.ReactNode;
	whiteText?: boolean;
	className?: string;
	bgImg?: string;
	bgImgAlt?: string;
	bgOpacity?: string;
}) {
	return (
		<div
			className={`${
				whiteText ? "text-white" : "text-black"
			} ${className} relative p-h w-full flex justify-center py-28`}
		>
			{bgImg ? (
				<img
					src={bgImg}
					alt={bgImgAlt}
					className={`w-full h-full absolute top-0 left-0 object-cover ${bgOpacity}`}
				/>
			) : (
				""
			)}

			<div className="flex flex-col relative z-10 max-w-7xl w-full">
				{children}
			</div>
		</div>
	);
}

export default DetailsOnly;
