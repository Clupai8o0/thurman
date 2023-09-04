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
			<div className="lg:hidden">
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
					<ReactMasonry gutter="16px">
						{[
							12, 1, 2, 3, 0, 5, 6, 7, 4, 9, 10, 8, 18, 13, 14, 15, 16, 11, 20,
							19, 17, 21, 22, 23, 24, 25, 26, 27,
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

			<div className="hidden md:flex gap-x-4">
				<div className="flex flex-col gap-y-4 w-1/3">
					{[20, 2, 3, 4, 5, 10, 7, 8, 11].map((i) => (
						<motion.img
							variants={inViewVariants}
							initial="fromDown"
							whileInView="visible"
							transition={{ duration: 0.4 }}
							viewport={{ once: true }}
							className="h-auto w-full rounded-lg"
							src={`/gallery/(${i}).jpeg`}
							alt="gallery"
							key={generateKey()}
						/>
					))}
				</div>

				<div className="flex flex-col gap-y-4 w-1/3">
					{[6, 9, 12, 13, 14, 15, 16, 17, 18].map((i) => (
						<motion.img
							variants={inViewVariants}
							initial="fromDown"
							whileInView="visible"
							transition={{ duration: 0.4 }}
							viewport={{ once: true }}
							className="h-auto w-full rounded-lg"
							src={`/gallery/(${i}).jpeg`}
							alt="gallery"
							key={generateKey()}
						/>
					))}
				</div>

				<div className="flex flex-col gap-y-4 w-1/3">
					{[19, 1, 21, 22, 23, 24, 25, 26, 27, 28].map((i) => (
						<motion.img
							variants={inViewVariants}
							initial="fromDown"
							whileInView="visible"
							transition={{ duration: 0.4 }}
							viewport={{ once: true }}
							className="h-auto w-full rounded-lg"
							src={`/gallery/(${i}).jpeg`}
							alt="gallery"
							key={generateKey()}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Masonry;
