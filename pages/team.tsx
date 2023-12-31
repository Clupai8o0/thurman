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
				title={<>OUR TEAM</>}
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
						alt: "Portrait of Reeves Thurman, the CEO at Thurman Event Management",
					},
					{
						name: "Shehbaaz K.",
						// position: "COO (Chief Operating Officer)",
						position: "COO",
						contact: "",
						src: "/shehbaaz.png",
						alt: "Picture of Shehbaaz K., the Chief Operating Officer at Thurman Event Management",
					},
					{
						name: "Javed K.",
						position: "Manager",
						contact: "",
						src: "/javed.png",
						alt: "Portrait of Javed K., the Manager at Thurman Event Management",
					},
					{
						name: "Javed S.",
						// position: "CMO (Chief Marketing Manager)",
						position: "CMO",
						contact: "",
						src: "/shaikh.png",
						alt: "Portrait of Javed S., the Chief Marketing Manager at Thurman Event Management",
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
