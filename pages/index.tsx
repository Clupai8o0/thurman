import {
	CTA,
	ContactSection,
	Details,
	FAQ,
	Head,
	Heading,
	Hero,
	Quote,
	SubHeading,
} from "@/components";
import { DetailsOnly, FAQsContainer, ImageWithDetails } from "@/layouts";

export default function Home() {
	return (
		<main className="main">
			<Head
				title="THURMAN - Events Management"
				desc="Thurman Events Management integrates strategic, creative, and technical expertise to guide corporate, government, and non-profit organizations through the implementation of successful exhibits."
			/>

			{/* HERO */}
			<Hero
				src="/hero-home-1.jpg"
				alt="Picture of a large crowd in an event"
				title={<>THURMAN EVENTS</>}
				thurmanTitle
				// desc="There's no good in a thing until its done. - CEO R. Thurman"
				desc="Let's create memories together"
				showCTA
			/>

			{/* CONTENT */}
			<ImageWithDetails
				whiteText
				reverse
				src="/thurman.png"
				alt="picture of the ceo reeve's thurman"
				className="pt-16"
			>
				<div className="flex flex-row gap-8">
					<Heading reverse className="!text-9xl">
						‟
					</Heading>
					<div className="flex flex-col">
						<Details reverse className="!text-3xl">
							"There is no good in a thing until it is done."
						</Details>
						<div className="w-full flex justify-end">
							<Details className="">
								- R. Thurman
								<br />
								<span className="ml-3">CEO</span>
							</Details>
						</div>
					</div>
				</div>
			</ImageWithDetails>

			<DetailsOnly whiteText id="about-us">
				<div className="flex flex-col md:flex-row mt-8">
					<div className="md:w-1/2 pr-6">
						<Heading>About Us</Heading>
						<Details>
							Pushing past the hardest of challenges, Thruman Events Management
							was found in the year 2021
						</Details>
						<Details>
							As a player in the field of events management, we are proud of
							having a team of enthusiastic designers and engineers who have
							built our reputation of relentless execution.
						</Details>
						<Details>
							It is this passion we pour into our clients and their creative
							needs
						</Details>
					</div>
					<div className="md:w-1/2">
						<SubHeading className="md:mt-14">Design & Execution</SubHeading>
						<Details>
							Thurman Events Management integrates strategic, creative, and
							technical expertise to guide corporate, government, and non-profit
							organizations through the implementation of successful exhibits.
						</Details>
						<Details>
							With our precise 2D/3D renderings, we help clients achieve their
							ideas by executing projects at local, regional and international
							platforms
						</Details>
					</div>
				</div>
			</DetailsOnly>

			<ImageWithDetails
				src="/road.jpg"
				alt="picture of road in the middle of a rain-forest"
				whiteText
			>
				<Heading className="text-6xl md:leading-[80px]">
					Difficult Roads But Beautiful Destinations
				</Heading>
				<Details>
					We believe in hard work and bringing together ingenious thinking with
					creative excellence to empower businesses, products/services and
					people.
				</Details>
				<Details>
					Whenever we help you communicate, we make certain that the experience
					felt by all is professional and inspiring
				</Details>
			</ImageWithDetails>

			<DetailsOnly className="bg-color-12" whiteText>
				<div className="flex flex-col md:flex-row gap-8">
					<div className="md:w-1/3">
						<Heading className="md:leading-[80px]">
							OUR <span className="text-white">MISSION</span>{" "}
						</Heading>
						<Details>
							Thurman Events aspires to be the top leading events management
							company in the region.
						</Details>
						<Details>
							With our team of professionals our intent is to build
							relationships with our clients with the goal of future prosperity
							of working together.
						</Details>
					</div>
					<div className="md:w-1/3">
						<Heading className="md:leading-[80px] text-white">
							<span className="hidden md:block text-bg select-none">OUR</span>{" "}
							VISION
						</Heading>
						<Details>
							Thurman events strives on raising the bar on customer experience
							by creating once in a life time service through our beliefs in
							elite hospitality and customer care.
						</Details>
						<Details>
							We dream on building relationships and creating beautiful
							memories.
						</Details>
					</div>
					<div className="md:w-1/3">
						<Heading className="md:leading-[80px] text-white">
							<span className="hidden md:block text-bg select-none">OUR</span>{" "}
							VALUES
						</Heading>
						<Details>P - Preparation</Details>
						<Details>P - Performance</Details>
					</div>
				</div>
			</DetailsOnly>

			<Hero
				title={<>THURMAN EVENTS</>}
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
						<CTA title="Our Team" href="/team" secondary darkMode />
					</>
				}
				variant
			/>

			<ContactSection />
		</main>
	);
}

// MAKING IT STATIC
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
