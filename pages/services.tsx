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
				title="THURMAN"
				desc="Thurman Events Management integrates strategic, creative, and technical expertise to guide corporate, government, and non-profit organizations through the implementation of successful exhibits. "
			/>

			{/* HERO */}
			<Hero
				src="/dummy.jpg"
				alt="NMMUN preview images of NMMUN'22"
				title="OUR SERVICES"
				// desc="There's no good in a thing until its done. - CEO R. Thurman"
				desc="Elevate your events with THURMAN. We're your one-stop destination for turning visions into unforgettable experiences."
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
				className="py-16"
			>
				<Heading id="our-expertise">Our Expertise</Heading>
				<Details>
					The success of an event lies in the smallest of details. We create an
					unforgettable experience driven by{" "}
					<span className="text-primary">passion,</span> crafted by{" "}
					<span className="text-primary">quality,</span> and measured in
					memories
				</Details>

				<Details>
					<div className="flex flex-row mt-8">
						<div className="w-1/2 md:w-1/3">
							<ul>
								<li className="text-xl capitalize">Award ceremonies</li>
								<li className="text-xl capitalize">Exhibitions</li>
								<li className="text-xl capitalize">Employee Gathering</li>
								<li className="text-xl capitalize">Corporate Events</li>
								<li className="text-xl capitalize">Conferences</li>
								<li className="text-xl capitalize">Branding</li>
							</ul>
						</div>
						<div className="w-1/2 md:w-1/3">
							<ul>
								<li className="text-xl capitalize">Wedding Ceremonies</li>
								<li className="text-xl capitalize">Public Engagements</li>
								<li className="text-xl capitalize">Sport Events</li>
								<li className="text-xl capitalize">Trade Shows</li>
								<li className="text-xl capitalize">
									Internal Corporate Events
								</li>
								<li className="text-xl capitalize">Activation</li>
							</ul>
						</div>
					</div>
				</Details>
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

				<Details>
					<div className="flex flex-row mt-8">
						<div className="w-1/2 md:w-1/3">
							<ul>
								<li className="capitalize text-xl">AV</li>
								<li className="capitalize text-xl">Sound System</li>
								<li className="capitalize text-xl">Lightings</li>
								<li className="capitalize text-xl">Truss Systems</li>
								<li className="capitalize text-xl">LED Screens</li>
							</ul>
						</div>
						<div className="w-1/2 md:w-1/3">
							<ul>
								<li className="capitalize text-xl">Furniture</li>
								<li className="capitalize text-xl">Entertainments</li>
								<li className="capitalize text-xl">Hosts/Hostesses</li>
								<li className="capitalize text-xl">Photographers</li>
								<li className="capitalize text-xl">Videographers</li>
							</ul>
						</div>
					</div>
				</Details>
			</ImageWithDetails>

			<DetailsOnly className="overflow-y-hidden h-[1280px] !pb-0">
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
									alt="gallery"
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
						<span className="text-primary">M</span>AN
					</>
				}
				desc={
					<>
						Let us help you making your moments that matter,{" "}
						<span className="underline">special</span>.
					</>
				}
				showCTA
				cta={
					<>
						<CTA title="Our Services" href="/services" darkMode />
						<CTA title="Our Team" href="/team" secondary darkMode />
					</>
				}
				variant
			/>

			<ContactSection />
		</main>
	);
}

export default Services;
