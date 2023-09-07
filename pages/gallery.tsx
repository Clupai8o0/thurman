import React from "react";

import { CTA, ContactSection, Head, Hero, Masonry } from "@/components";
import { DetailsOnly, Timeline, TimelineContainer } from "@/layouts";

function Gallery() {
	return (
		<main className="main">
			<Head
				title="THURMAN: Gallery"
				desc="Welcome to our gallery of remarkable moments and extraordinary experiences! Step into a world of creativity, precision, and unparalleled event management expertise."
			/>

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
				title={<>THURMAN EVENTS</>}
				desc={
					<>
						Let us help you in making those moments that matter,{" "}
						<span className="text-primary">special</span>.
					</>
				}
				showCTA
				cta={
					<>
						<CTA title="Contact Us" href="/contact" darkMode />
						<CTA title="About Us" href="/" secondary darkMode />
					</>
				}
				variant
				className=""
			/>

			<ContactSection />
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
