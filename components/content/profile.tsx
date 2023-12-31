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
			className={`w-full bg-[#090909] border border-gray-800 rounded-md shadow-md ${
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
				className={`object-cover w-3/4 ${
					!rounded ? "rounded-t-lg" : "rounded-full"
				}`}
				src={src}
				alt={alt}
			/>

			<div className={`p-5 ${rounded && "text-center"}`}>
				<h5 className="mb-2 text-3xl text-primary">{name}</h5>

				<p className="mb-3 text-2xl text-gray-400">
					{position}
				</p>
			</div>
		</motion.div>
	);
};

export default Profile;
