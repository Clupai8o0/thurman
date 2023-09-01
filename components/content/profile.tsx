import React from "react";
import { motion } from "framer-motion";

import { inViewVariants } from "@/config/animations";

const Profile = ({
	src,
	alt,
	name,
	position,
	rounded,
}: {
	src: string;
	alt: string;
	name: string;
	position: string;
	rounded?: boolean;
}) => {
	return (
		<motion.div
			className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ${
				rounded && "flex flex-col items-center pt-8"
			}`}
			variants={inViewVariants}
			initial="fromDown"
			whileInView="visible"
			transition={{
				duration: 0.4,
			}}
			viewport={{ once: true, amount: 0.25 }}
		>
			<img
				className={`${!rounded ? "rounded-t-lg" : "rounded-full w-36 h-36"}`}
				src={src}
				alt={alt}
			/>

			<div className={`p-5 ${rounded && "text-center"}`}>
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
					{name}
				</h5>

				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{position}
				</p>
			</div>
		</motion.div>
	);
};

export default Profile;
