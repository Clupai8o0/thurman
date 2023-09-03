import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/config/animations";

const Heading = ({
	children,
	reverse,
	delay,
	className,
	id
}: {
	children: React.ReactNode;
	reverse?: boolean;
	delay?: number;
	className?: string;
	id?: string;
}) => {
	return (
		<motion.h1
			className={`text-7xl leading-[0.9] md:leading-[0.8] md:text-8xl capitalize text-primary ${className}`}
			variants={inViewVariants}
			initial={reverse ? "fromLeft" : "fromRight"}
			whileInView="visible"
			transition={{
				duration: 0.4,
				delay,
			}}
			viewport={{ once: true, amount: 0.25 }}
			id={id}
		>
			{children}
		</motion.h1>
	);
};

export default Heading;
