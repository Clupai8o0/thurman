import React from "react";

import { Head, Hero, Masonry } from "@/components";
import { DetailsOnly, Timeline, TimelineContainer } from "@/layouts";

function Gallery() {
	return (
		<main className="main">
			<Head title="THURMAN: Gallery" desc="The gallery page of the NMMUN" />

			{/* HERO */}
			{/* <Hero
				title="GALLERY"
				src="/hero-gallery-4.jpg"
				alt="some dummy pic"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quaerat molestias."
			/> */}

			{/* CONTENT */}
			<div
				className="text-white
			relative p-h w-full flex justify-center pt-8 pb-28"
			>
				<div className={`flex relative z-10 max-w-7xl w-full`}>
					<Masonry
						title="GALLERY"
						dir="/21-22"
						href="https://drive.google.com/drive/folders/1zcQiauT-H2_NVyGsMeabcbmCWRI6QTg4?usp=sharing"
					/>
				</div>
			</div>

			<Hero
				title={
					<>
						T<span className="text-primary">H</span>UR
						<span className="text-primary">M</span>AN
					</>
				}
				desc={
					<>
						Let us help you making your moments that matter,{" "}
						<span className="underline">special</span>.
					</>
				}
				showCTA
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
