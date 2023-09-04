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
			<Head
				title="THURMAN: Contact Us"
				desc="Want to learn more about our creative services? Send us a message and we'll follow as soon as we can"
			/>

			{/* HERO */}
			<ContactSection />
		</main>
	);
}

export default Contact;

import { GetStaticProps } from "next";
import { ContactSection, Head } from "@/components";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
