import Head from "next/head";

function Contact() {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const resp = await fetch("/api/send-email", {
			method: "POST",
			body: JSON.stringify({}),
		});
		const data = await resp.json();
		console.log(data);
	};

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

			<form onSubmit={handleSubmit}>
				<button type="submit" className="bg-white">
					Send
				</button>
			</form>
		</main>
	);
}

export default Contact;

import { GetStaticProps } from "next";
import { ContactSection } from "@/components";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
