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
				desc="At Thurman Events, we value your feedback, inquiries, and connections. Our mission is to provide you with the best service possible, and we're here to assist you in any way we can. Whether you have questions about our services, want to discuss a project, or simply want to say hello, reaching out to us is easy and convenient."
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
