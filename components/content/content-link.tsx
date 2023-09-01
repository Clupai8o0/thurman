
import Link from "next/link";
import { motion } from "framer-motion";

import { inViewVariants } from "@/config/animations";

const ContentLink = ({
	src,
	alt,
	title,
	url,
	delay,
}: {
	src: string;
	alt: string;
	title: string;
	url: string;
	delay?: number;
}) => {
	return (
		<Link href={url}>
			<motion.div
				className="flex items-center gap-4 rounded-xl hover:bg-gray-200 p-2 md:flex-col md:p-12 md:hidden"
				variants={inViewVariants}
				initial="fromLeft"
				animate="visible"
				transition={{
					duration: 0.4,
					delay,
				}}
			>
				<img
					src={src}
					alt={alt}
					className="rounded-full w-8 h-8 md:w-20 md:h-20"
				/>
				<p className="font-semibold md:text-xl">{title}</p>
			</motion.div>
			<motion.div
				className="hidden md:flex items-center gap-4 rounded-xl hover:bg-gray-200 p-2 md:flex-col md:p-12"
				variants={inViewVariants}
				initial="fromDown"
				animate="visible"
				transition={{
					duration: 0.4,
					delay,
				}}
			>
				<img
					src={src}
					alt={alt}
					className="rounded-full w-8 h-8 md:w-20 md:h-20"
				/>
				<p className="font-semibold md:text-xl">{title}</p>
			</motion.div>
		</Link>
	);
};

export default ContentLink;
