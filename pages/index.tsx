import {
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
				title="THURMAN"
				desc="Thurman Events Management integrates strategic, creative, and technical expertise to guide corporate, government, and non-profit organizations through the implementation of successful exhibits. "
			/>

			{/* HERO */}
			<Hero
				src="/dummy.jpg"
				alt="NMMUN preview images of NMMUN'22"
				title={
					<>
						T<span className="text-primary">H</span>UR
						<span className="text-primary">M</span>AN
					</>
				}
				// desc="There's no good in a thing until its done. - CEO R. Thurman"
				desc="Let's create memories together"
				showCTA
			/>

			{/* CONTENT */}
			{/* <ImageWithDetails className="py-28 bg-color-1" whiteText reverse>
				<Heading reverse id="about-us">About Us</Heading>
				<Details reverse>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque
					temporibus nobis voluptatem id quae. Delectus enim voluptas blanditiis
					libero, nemo ipsa quasi expedita, incidunt doloremque sit quia quaerat
					quae.
				</Details>
				<Details reverse>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<SubHeading reverse>Subheadding</SubHeading>
				<Details reverse>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
			</ImageWithDetails>

			<ImageWithDetails
				whiteText
				className="py-28 bg-black"
				bgImg="/dummy.png"
				bgImgAlt="some dummy img"
				bgOpacity="opacity-40"
			>
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque
					temporibus nobis voluptatem id quae. Delectus enim voluptas blanditiis
					libero, nemo ipsa quasi expedita, incidunt doloremque sit quia quaerat
					quae.
				</Details>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
			</ImageWithDetails> */}

			<DetailsOnly whiteText flexRow>
				<div className="w-1/2 pr-6">
					<Heading id="about-us">About Us</Heading>
					<Details>
						Pushing past the hardest of challenges, Thruman Events Management
						was founded in the year 2021
					</Details>
					<Details>
						As a player in the field of events management, we are proud of
						having a team of enthusiastic designers and engineers who have built
						our reputation of relentless execution.
					</Details>
					<Details>
						It is this passion we pour into our clients and their creative needs
					</Details>
				</div>
				<div className="w-1/2">
					<SubHeading>Design & Execution</SubHeading>
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
			</DetailsOnly>

			<ImageWithDetails src="/road.jpg" alt="picture of road in the middle of a rain-forest" whiteText>
				<Heading className="text-6xl leading-[80px]">Difficult Roads But Beautiful Destinations</Heading>
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

			<DetailsOnly className="bg-color-12">
				<Heading>FAQs</Heading>

				<FAQsContainer>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
					/>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
					/>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
					/>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
					/>
				</FAQsContainer>
			</DetailsOnly>

			<Hero
				src="/dummy.png"
				alt="some dummy img"
				title="NMMUN"
				showCTA
				showTimer
				showYear
				variant
				className=""
			/>
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
