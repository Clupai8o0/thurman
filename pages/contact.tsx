import Hero from "@/components/content/hero";
import Head from "next/head";

function Contact() {
	return (
		<main className="main">
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<title>NMMUN</title>
			</Head>

			{/* HERO */}
			<Hero
				src="/hero-contact-1.jpg"
				alt="some dummy img"
				title="CONTACT US"
				showContactCTA
				showTimer
			/>
		</main>
	);
}

export default Contact;

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
