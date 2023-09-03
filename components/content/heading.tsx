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
			className={`text-7xl md:text-8xl capitalize text-primary ${className}`}
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
