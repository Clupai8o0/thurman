import {
	CTA,
	ContactSection,
	Details,
	Head,
	Heading,
	Hero,
	SubHeading,
} from "@/components";
import { DetailsOnly, ImageWithDetails } from "@/layouts";
import ReactMasonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";
import { inViewVariants } from "@/config/animations";
import { v4 as generateKey } from "uuid";

function imgsList() {
	let list: number[] = [];
	for (let i = 0; i < 18; i++) {
		list.push(i);
	}
	for (let i = list.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[list[i], list[j]] = [list[j], list[i]]; // Swap elements
	}
	return list;
}

function Services() {
	const list = imgsList();

	return (
		<main className="main">
			<Head
				title="THURMAN: Services"
				desc="Are you ready to transform your vision into unforgettable experiences? Look no further! At Thurman Events, we specialize in comprehensive event management services that turn your ideas into reality."
			/>

			{/* HERO */}
			<Hero
				src="/hero-services.jpeg"
				alt="picture of 2 people discussing one with pencil in hand on a table with papers"
				title={
					<>
						O<span className="text-primary">U</span>R S
						<span className="text-primary">E</span>RVIC
						<span className="text-primary">E</span>S
					</>
				}
				// desc="There's no good in a thing until its done. - CEO R. Thurman"
				desc="Elevate your events with THURMAN EVENTS MANAGEMENT. We are your one-stop destination for turning visions into unforgettable experiences."
				showCTA
				cta={
					<>
						<CTA title="Contact Us" href="/register" darkMode />
						<CTA title="Learn More" href="#our-expertise" secondary darkMode />
					</>
				}
			/>

			{/* CONTENT */}
			<ImageWithDetails
				whiteText
				reverse
				src="/expertise.jpeg"
				alt=""
				className="py-16 pt-28"
				id="our-expertise"
			>
				<Heading>Our Expertise</Heading>
				<Details>
					The success of an event lies in the smallest of details. We create an
					unforgettable experience driven by{" "}
					<span className="text-primary">passion,</span> crafted by{" "}
					<span className="text-primary">quality,</span> and measured in
					memories
				</Details>

				<div>
					<div className="flex flex-row mt-8">
						<div className="w-1/2 md:w-1/3">
							<ul className="flex flex-col gap-y-2">
								<li className="text-xl capitalize leading-5">
									Award ceremonies
								</li>
								<li className="text-xl capitalize leading-5">Exhibitions</li>
								<li className="text-xl capitalize leading-5">
									Employee Gathering
								</li>
								<li className="text-xl capitalize leading-5">
									Corporate Events
								</li>
								<li className="text-xl capitalize leading-5">Conferences</li>
								<li className="text-xl capitalize leading-5">Branding</li>
							</ul>
						</div>
						<div className="w-1/2 md:w-1/3">
							<ul className="flex flex-col gap-y-2">
								<li className="text-xl capitalize leading-5">
									Wedding Ceremonies
								</li>
								<li className="text-xl capitalize leading-5">
									Public Engagements
								</li>
								<li className="text-xl capitalize leading-5">Sport Events</li>
								<li className="text-xl capitalize leading-5">Trade Shows</li>
								<li className="text-xl capitalize leading-5">
									Internal Corporate Events
								</li>
								<li className="text-xl capitalize leading-5">Activation</li>
							</ul>
						</div>
					</div>
				</div>
			</ImageWithDetails>

			<ImageWithDetails
				whiteText
				src="/provide.jpg"
				alt=""
				className="py-16"
				opacity={0.9}
			>
				<Heading>We Also Provide</Heading>
				<Details>
					Our team of experienced event planners work close with clients to
					ensure that every detail is{" "}
					<span className="text-primary">planned</span> and{" "}
					<span className="text-primary">executed</span> flawlessly, no matter
					the occasion
				</Details>

				<div>
					<div className="flex flex-row mt-8">
						<div className="w-1/2 md:w-1/3">
							<ul className="flex flex-col gap-y-2">
								<li className="capitalize text-xl leading-5">AV</li>
								<li className="capitalize text-xl leading-5">Sound System</li>
								<li className="capitalize text-xl leading-5">Lightings</li>
								<li className="capitalize text-xl leading-5">Truss Systems</li>
								<li className="capitalize text-xl leading-5">LED Screens</li>
							</ul>
						</div>
						<div className="w-1/2 md:w-1/3">
							<ul className="flex flex-col gap-y-2">
								<li className="capitalize text-xl leading-5">Furniture</li>
								<li className="capitalize text-xl leading-5">Entertainments</li>
								<li className="capitalize text-xl leading-5">
									Hosts/Hostesses
								</li>
								<li className="capitalize text-xl leading-5">Photographers</li>
								<li className="capitalize text-xl leading-5">Videographers</li>
							</ul>
						</div>
					</div>
				</div>
			</ImageWithDetails>

			<DetailsOnly className="overflow-y-hidden h-[1800px] lg:h-[1440px] !pb-0">
				<Heading className="mb-16" reverse>
					Our Work
				</Heading>

				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 900: 3 }}>
					<ReactMasonry gutter="16px">
						{list.map((i) => (
							<motion.div
								className="relative w-full rounded-lg"
								variants={inViewVariants}
								initial="fromDown"
								whileInView="visible"
								transition={{ duration: 0.4 }}
								viewport={{ once: true }}
								key={generateKey()}
							>
								<img
									className="h-auto w-full rounded-lg object-cover object-center"
									src={`/gallery/(${i + 1}).jpeg`}
									alt="gallery picture"
								/>
							</motion.div>
						))}
					</ReactMasonry>
				</ResponsiveMasonry>

				<div className="w-full h-1/2 bottom-[16.666666667%] absolute bg-gradient-to-t from-[#060606] to-[rgba(0,0,0,0)]"></div>
				<div className="w-full h-1/6 absolute bottom-0 bg-[#060606]"></div>
			</DetailsOnly>

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
						<CTA title="Gallery" href="/gallery" darkMode secondary />
					</>
				}
				variant
			/>

			<ContactSection />
		</main>
	);
}

export default Services;
