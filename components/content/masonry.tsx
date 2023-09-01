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
			<Heading className="mb-8" delay={1.6} reverse>
				{title}
			</Heading>
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1280: 4 }}
			>
				<ReactMasonry gutter="16px">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
						<motion.div
							className="relative h-64 max-h-64 w-full rounded-lg"
							variants={inViewVariants}
							initial="fromDown"
							whileInView="visible"
							transition={{ duration: 0.4 }}
							viewport={{ once: true }}
							key={generateKey()}
						>
							<Image
								fill
								className="h-auto max-w-full rounded-lg object-cover object-center"
								src={`${dir}/${n}.jpg`}
								placeholder="blur"
								blurDataURL="https://via.placeholder.com/500x500"
								alt="gallery"
							/>
						</motion.div>
					))}
				</ReactMasonry>
			</ResponsiveMasonry>
			<div className="w-full flex justify-center py-8">
				<CTA title="View All" href={href} target="_blank" />
			</div>
		</div>
	);
};

export default Masonry;
