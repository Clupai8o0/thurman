// Icons
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

// Animation
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/config/animations";

// Components
import { CTA, Timer } from "..";
import Carousel from "./carousel";

interface Contents {
	title: string | React.ReactNode;
	showTimer?: boolean;
	showContactCTA?: boolean;
	showCTA?: boolean;
	showYear?: boolean;
	desc?: string;
	src: string;
	alt: string;
	className?: string;
	variant?: boolean;
	mobileMini?: boolean;
	whileInView?: boolean;
	carousel?: boolean;
	images?: string[];
}

const HeroContents = ({
	title,
	showTimer,
	showContactCTA,
	showYear,
	showCTA,
	desc,
	mobileMini,
	whileInView,
}: Contents) => {
	return (
		<>
			{/* TITLE */}
			<motion.h1
				className={`title ${
					mobileMini && "title-mobile-mini"
				} relative z-10 text-center`}
				variants={inViewVariants}
				initial="fromDown"
				animate={(!whileInView && "visible") || ""}
				whileInView={(whileInView && "visible") || ""}
				transition={{
					duration: 0.4,
					delay: (!whileInView && 2.4) || 0,
				}}
				viewport={(whileInView && { once: true, amount: 0.25 }) || undefined}
			>
				{title}
			</motion.h1>

			<motion.p
				className="text-center relative z-10 mt-4 px-4 text-xl"
				variants={inViewVariants}
				initial="fromDown"
				animate={(!whileInView && "visible") || ""}
				whileInView={(whileInView && "visible") || ""}
				transition={{
					duration: 0.4,
					delay: (!whileInView && 2.6) || 0,
				}}
				viewport={(whileInView && { once: true, amount: 0.25 }) || undefined}
			>
				{desc}
			</motion.p>

			{/* CTA */}
			{showCTA && (
				<motion.div
					className="flex gap-2 md:gap-4 mt-6 md:mt-10 relative z-10"
					variants={inViewVariants}
					initial="fromDown"
					animate={(!whileInView && "visible") || ""}
					whileInView={(whileInView && "visible") || ""}
					transition={{
						duration: 0.4,
						delay: (!whileInView && 2.8) || 0,
					}}
					viewport={(whileInView && { once: true, amount: 0.25 }) || undefined}
				>
					<CTA title="Contact Us" href="/register" darkMode />
					<CTA title="Learn More" href="#about-us" secondary darkMode />
				</motion.div>
			)}

			{/* CONTACT CTA */}
			{showContactCTA && (
				<motion.div
					className="flex gap-2 md:gap-4 mt-4 md:mt-6 relative z-10"
					variants={inViewVariants}
					initial="fromDown"
					animate={(!whileInView && "visible") || ""}
					whileInView={(whileInView && "visible") || ""}
					transition={{
						duration: 0.4,
						delay: (!whileInView && 3) || 0,
					}}
					viewport={(whileInView && { once: true, amount: 0.25 }) || undefined}
				>
					<CTA
						title="Instagram"
						href="https://www.instagram.com/nmmun_23/"
						target="_blank"
						icon={<AiFillInstagram className="w-6 h-6" />}
						darkMode
					/>
					<CTA
						title="Email"
						target="_blank"
						href="mailto:nmmun2023cs@gmail.com"
						icon={<MdEmail className="w-6 h-6" />}
						secondary
						darkMode
					/>
				</motion.div>
			)}
		</>
	);
};

const Hero = (props: Contents) => {
	const { className, src, alt, variant, images, carousel } = props;

	return variant ? (
		// BOX HERO
		<motion.section
			className={`text-white w-full flex justify-center p-h ${className}`}
			variants={inViewVariants}
			initial="fromDown"
			whileInView="visible"
			viewport={{ once: true, amount: 0.25 }}
			transition={{
				duration: 0.4,
			}}
		>
			<div className="max-w-7xl w-full flex flex-col justify-center items-center py-28 md:py-20 relative shadow-md rounded-2xl bg-black ">
				<img
					src={src}
					alt={alt}
					className="w-full h-full absolute top-0 left-0 object-cover opacity-50 rounded-2xl"
				/>
				<HeroContents {...props} />
			</div>
		</motion.section>
	) : (
		// FULL HERO
		<section
			className={`text-white w-full flex justify-center p-h bg-black ${className} relative py-12`}
		>
			{!carousel ? (
				<img
					src={src}
					alt={alt}
					className="w-full h-full object-cover opacity-40 absolute top-0 left-0"
				/>
			) : (
				<div className="absolute w-full h-full top-0 left-0">
					<Carousel>
						{
							//@ts-ignore
							images.map((src) => (
								<img
									src={src}
									alt={alt}
									className="min-w-full object-cover opacity-40"
									// style={{ width: 1280 }}
								/>
							))
						}
					</Carousel>
				</div>
			)}

			<div className="max-w-7xl w-full flex flex-col justify-center items-center py-28 md:py-20 relative ">
				<HeroContents {...props} />
			</div>
		</section>
	);
};

export default Hero;
