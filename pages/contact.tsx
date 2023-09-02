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
			<DetailsOnly whiteText>
				<Heading>Contact Us</Heading>
				<Details>
					To know more about our creative services please contact us
				</Details>
				<div className="flex flex-col md:flex-row mt-8">
					<div className="w-1/3">
						<SubHeading className="mb-4">Address: </SubHeading>
						<ul>
							<li className="text-xl capitalize">Block - 321</li>
							<li className="text-xl capitalize">Road - 2124</li>
							<li className="text-xl capitalize">Building - 1913, 2nd Floor</li>
							<li className="text-xl capitalize">Manama, Bahrain</li>
						</ul>
					</div>
					<div className="w-1/3">
						<SubHeading className="mb-4">Socials & Contact Information</SubHeading>
						<ul className="text-xl capitalize">
							<li className="gap-4">
								Mobile:
								<a href="tel:+973-3313-1730">+973 3313 1730</a>
							</li>
							<li>
								Email:
								<a href="mailto:thurmanevents@gmail.com">
									thurmanevents@gmail.com
								</a>
							</li>
							<li>
								<AiFillInstagram className="w-6 h-6" />
								<a href=""></a>
							</li>
							<li>
								<AiFillFacebook className="w-6 h-6" />
								<a href=""></a>
							</li>
						</ul>
					</div>
				</div>
			</DetailsOnly>
		</main>
	);
}

export default Contact;

import { GetStaticProps } from "next";
import { DetailsOnly } from "@/layouts";
import { Details, Heading, SubHeading } from "@/components";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
