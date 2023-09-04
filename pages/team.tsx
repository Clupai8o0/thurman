import React from "react";
import { v4 as generateKey } from "uuid";

import {
	CTA,
	ContactSection,
	ContentLink,
	Head,
	Hero,
	Profile,
} from "@/components";
import { ProfilesContainer, TableOfContent } from "@/layouts";

function Team() {
	return (
		<main className="main">
			<Head
				title="THURMAN: Team"
				desc="At Thurman Events, our success is driven by the talent, passion, and dedication of our exceptional team members. We take great pride in introducing you to the individuals who make our organization thrive."
			/>

			{/* HERO */}
			<Hero
				title={
					<>
						O<span className="text-primary">U</span>R TEA
						<span className="text-primary">M</span>
					</>
				}
				src="/hero-team-3.jpg"
				alt="picture of a group of people on computers working"
				// desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quaerat molestias."
			/>

			{/* CONTENT */}
			<ProfilesContainer title="Organizers">
				{[
					{
						name: "R. Thurman",
						position: "CEO",
						contact: "",
						src: "/thurman.png",
						alt: "Portrait of Reeves Thurman, the CEO of Thurman Event Management",
					},
					{
						name: "Shehbaaz K.",
						position: "Operations Manager",
						contact: "",
						src: "/shehbaaz.jpeg",
						alt: "Picture of Shehbaaz K., the operations manager of Thurman Event Management",
					},
					{
						name: "Javed K.",
						position: "Manager",
						contact: "",
						src: "/javed.jpeg",
						alt: "Portrait of Javed K., the Manager of Thurman Event Management",
					},
				].map((profile) => (
					<Profile
						key={generateKey()}
						src={profile.src}
						alt={profile.alt}
						name={profile.name}
						position={profile.position}
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
						<span className="text-primary">M</span>AN{" "}
						<span className="text-primary">E</span>V
						<span className="text-primary">E</span>NTS
					</>
				}
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
						<CTA title="Our Services" href="/services" secondary darkMode />
					</>
				}
				variant
			/>

			<ContactSection />
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
