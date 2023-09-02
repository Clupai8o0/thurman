import React from "react";
import { v4 as generateKey } from "uuid";

import { ContentLink, Head, Hero, Profile } from "@/components";
import { ProfilesContainer, TableOfContent } from "@/layouts";

function Team() {
	return (
		<main className="main">
			<Head
				title="THURMAN: Team"
				desc="The team responsible for making this years NMMUN possible"
			/>

			{/* HERO */}
			<Hero
				title="OUR TEAM"
				src="/hero-team-2.jpg"
				alt="some dummy pic"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quaerat molestias."
			/>

			{/* CONTENT */}
			<ProfilesContainer title="Organizers">
				{[1, 2, 3, 4].map((profile, i) => (
					<Profile
						key={generateKey()}
						src="/dummy.jpg"
						alt="some dummy"
						name="Someone"
						position="Some Position"
					/>
				))}
			</ProfilesContainer>
			<ProfilesContainer title="IT">
				{[1, 2, 3, 4].map((profile, i) => (
					<Profile
						key={generateKey()}
						src="/dummy.jpg"
						alt="some dummy"
						name="Someone"
						position="Some Position"
						rounded
					/>
				))}
			</ProfilesContainer>

			{/* MARGIN BETWEEN */}
			<div className="my-12" />

			<Hero
				title={
					<>
						T<span className="text-primary">H</span>UR
						<span className="text-primary">M</span>AN
					</>
				}
				showCTA
				variant
			/>
		</main>
	);
}

export default Team;

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
