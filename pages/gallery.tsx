import React from "react";

import { Head, Hero, Masonry } from "@/components";
import { Timeline, TimelineContainer } from "@/layouts";

function Gallery() {
	return (
		<main className="main">
			<Head title="NMMUN: Gallery" desc="The gallery page of the NMMUN" />

			{/* HERO */}
			<Hero
				title="GALLERY"
				src="/hero-gallery-4.jpg"
				alt="some dummy pic"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quaerat molestias."
			/>

			{/* CONTENT */}
			<TimelineContainer className="mt-16">
				<Timeline date="October, 2022">
					<Masonry
						title="NMMUN 2022"
						dir="/21-22"
						href="https://drive.google.com/drive/folders/1zcQiauT-H2_NVyGsMeabcbmCWRI6QTg4?usp=sharing"
					/>
				</Timeline>
			</TimelineContainer>

			{/* MARGIN BETWEEN */}
			<Hero
				src="/dummy.png"
				alt="some dummy img"
				title="NMMUN"
				showCTA
				showTimer
				showYear
				variant
				className=""
			/>
		</main>
	);
}

export default Gallery;

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
