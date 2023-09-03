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
				<title>THURMAN: Contact us</title>
			</Head>

			{/* HERO */}
			<ContactSection />
		</main>
	);
}

export default Contact;

import { GetStaticProps } from "next";
import { DetailsOnly } from "@/layouts";
import { ContactSection, Details, Heading, SubHeading } from "@/components";
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillPhone,
	AiFillMail,
} from "react-icons/ai";
import { socialLinks } from "@/config/links";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
