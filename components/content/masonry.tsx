import React from "react";
import Image from "next/image";
import ReactMasonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";
import { v4 as generateKey } from "uuid";

import { CTA, Heading } from "..";
import { inViewVariants } from "@/config/animations";

function imgsList() {
	let list: number[] = [];
	for (let i = 0; i < 28; i++) {
		list.push(i);
	}
	for (let i = list.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[list[i], list[j]] = [list[j], list[i]]; // Swap elements
	}
	return list;
}

const Masonry = ({
	title,
	dir,
	href,
}: {
	title: string;
	dir: string;
	href: string;
}) => {
	const list = imgsList();

	return (
		<div className="w-full mt-6">
			<Heading className="mb-16" delay={1.6} reverse>
				GALLERY
			</Heading>
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
			>
				<ReactMasonry gutter="16px">
					{list.map((i) => (
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
