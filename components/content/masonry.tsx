import React from "react";
import Image from "next/image";
import ReactMasonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";
import { v4 as generateKey } from "uuid";

import { CTA, Heading } from "..";
import { inViewVariants } from "@/config/animations";

const Masonry = ({
	title,
	dir,
	href,
}: {
	title: string;
	dir: string;
	href: string;
}) => {
	return (
		<div className="w-full mt-6">
			<Heading className="mb-16" delay={1.6} reverse>
				GALLERY
			</Heading>
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<ReactMasonry gutter="16px">
					{[
						12,1, 2, 3, 0, 5, 6, 7, 4, 9, 10, 8, 18, 13, 14, 15, 16, 11, 20, 19,
					17, 21, 22, 23, 24, 25, 26, 27 
					].map((i) => (
						<motion.div
							className="relative w-full rounded-lg"
							variants={inViewVariants}
							initial="fromDown"
							whileInView="visible"
							transition={{ duration: 0.4 }}
							viewport={{ once: true }}
							key={generateKey()}
						>
							<img
								className="h-auto w-full rounded-lg object-cover object-center"
								src={`/gallery/(${i + 1}).jpeg`}
								alt="gallery"
							/>
						</motion.div>
					))}
				</ReactMasonry>
			</ResponsiveMasonry>
		</div>
	);
};

export default Masonry;
