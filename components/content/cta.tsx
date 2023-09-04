import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { inViewVariants } from "@/config/animations";

const CTA = ({
	title,
	href,
	delay,
	secondary,
	icon,
	className,
	target,
	darkMode,
	noAnimation,
	type,
}: {
	title: string;
	href?: string;
	delay?: number;
	secondary?: boolean;
	icon?: React.ReactNode;
	className?: string;
	target?: string;
	darkMode?: boolean;
	noAnimation?: boolean;
	type?: "button" | "submit";
}) => {
	return (
		<motion.div
			className={`w-full flex justify-center ${className}`}
			variants={inViewVariants}
			initial={!noAnimation && "fromDown"}
			whileInView={(!noAnimation && "visible") || ""}
			transition={{
				duration: 0.4,
				delay,
			}}
			viewport={{ once: true, amount: 0.25 }}
		>
			{href ? (
				<Link href={href} target={target}>
					{!secondary ? (
						<button
							className={`rounded-lg cursor-pointer ${
								darkMode
									? "text-black bg-primary border-2 border-primary"
									: "text-white bg-black border-2 border-black hover:text-blue-300"
							} pb-2 pt-1 lg:pb-3 lg:pt-2 px-6 lg:px-10 hover:-translate-y-1 hover:scale-105 focus:scale-100 focus:translate-y-0 hover:shadow-2xl transition-all duration-300 ease-in-out`}
							type={type}
						>
							<span className="flex items-center gap-2 whitespace-nowrap flex-nowrap font-semibold text-2xl">
								{icon} {title}
							</span>
						</button>
					) : (
						<button
							className={`rounded-lg cursor-pointer ${
								darkMode
									? "text-primary hover:text-primary border-2 border-primary hover:bg-primary"
									: "text-black hover:text-black border-2 border-black hover:bg-black"
							} hover:bg-opacity-20 pb-2 pt-1 lg:pb-3 lg:pt-2 lg:py-3 px-6 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl focus:scale-100 focus:translate-y-0 lg:px-8 transition-all duration-300 ease-in-out`}
							type={type}
						>
							<span className="whitespace-nowrap flex items-center gap-2 flex-nowrap font-semibold text-2xl">
								{icon} {title}
							</span>
						</button>
					)}
				</Link>
			) : (
				<>
					{!secondary ? (
						<button
							className={`rounded-lg cursor-pointer ${
								darkMode
									? "text-black bg-primary border-2 border-primary"
									: "text-white bg-black border-2 border-black hover:text-blue-300"
							} pb-2 pt-1 lg:pb-3 lg:pt-2 px-6 lg:px-10 hover:-translate-y-1 hover:scale-105 focus:scale-100 focus:translate-y-0 hover:shadow-2xl transition-all duration-300 ease-in-out`}
							type={type}
						>
							<span className="flex items-center gap-2 whitespace-nowrap flex-nowrap font-semibold text-2xl">
								{icon} {title}
							</span>
						</button>
					) : (
						<button
							className={`rounded-lg cursor-pointer ${
								darkMode
									? "text-primary hover:text-primary border-2 border-primary hover:bg-primary"
									: "text-black hover:text-black border-2 border-black hover:bg-black"
							} hover:bg-opacity-20 pb-2 pt-1 lg:pb-3 lg:pt-2 lg:py-3 px-6 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl focus:scale-100 focus:translate-y-0 lg:px-8 transition-all duration-300 ease-in-out`}
							type={type}
						>
							<span className="whitespace-nowrap flex items-center gap-2 flex-nowrap font-semibold text-2xl">
								{icon} {title}
							</span>
						</button>
					)}
				</>
			)}
		</motion.div>
	);
};

export default CTA;
