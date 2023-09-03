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
					<div className="w-2/3">
						<SubHeading className="mb-4">
							Socials & Contact Information
						</SubHeading>
						<ul className="text-xl">
							<li className="gap-2 flex items-center mt-2">
								{/* <a
									href="tel:+973-3313-1730"
									className="hover:text-primary hover:underline transition duration-300 ease-in-out flex gap-2 items-center mt-2"
								> */}
								<AiFillPhone className="w-6 h-6" />
								+973 3313 1730
								{/* </a> */}
							</li>
							<li>
								<a
									href="mailto:thurmanevents@gmail.com"
									className="hover:text-primary hover:underline transition duration-300 ease-in-out flex gap-2 items-center mt-2"
									target="_blank"
								>
									<AiFillMail className="w-6 h-6" />
									thurmanevents@gmail.com
								</a>
							</li>
							<li>
								<a
									href={socialLinks.instagram}
									className="hover:text-primary hover:underline transition duration-300 ease-in-out flex gap-2 items-center mt-2"
									target="_blank"
								>
									<AiFillInstagram className="w-6 h-6" />
									@thurmanevents
								</a>
							</li>
							{/* <li>
								<a
									href={socialLinks.facebook}
									className="hover:text-primary hover:underline transition duration-300 ease-in-out flex gap-2 items-center mt-2"
								>
									<AiFillFacebook className="w-6 h-6" />
									Thurman Events
								</a>
							</li> */}
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
