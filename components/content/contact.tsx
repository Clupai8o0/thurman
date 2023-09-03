import { DetailsOnly } from "@/layouts";

import { Details, Heading, SubHeading } from "..";
import { AiFillInstagram, AiFillMail, AiFillPhone } from "react-icons/ai";
import { socialLinks } from "@/config/links";

const ContactSection = () => {
	return (
		<DetailsOnly whiteText>
			<Heading>Contact Us</Heading>
			<Details>
				To know more about our creative services please contact us
			</Details>
			<div className="flex flex-col md:flex-row mt-8">
				<div className="w-full md:w-1/3">
					<SubHeading className="mb-4">Address: </SubHeading>
					<Details className="w-full md:w-2/3">
						Block 321, Road 2124, Building 1913, 2nd Floor, Manama, Bahrain
					</Details>
				</div>
				<div className="w-full md:w-2/3">
					<SubHeading className="mb-4">
						Socials & Contact Information
					</SubHeading>
					<Details>
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
							<li className="gap-2 flex items-center mt-2">
								<AiFillMail className="w-6 h-6" />
								thurmanevents@gmail.com
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
					</Details>
				</div>
			</div>
		</DetailsOnly>
	);
};

export default ContactSection;
