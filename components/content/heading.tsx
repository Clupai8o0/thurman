import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/config/animations";

const Heading = ({
	children,
	reverse,
	delay,
	className
}: {
	children: React.ReactNode;
	reverse?: boolean;
	delay?: number;
	className?: string
}) => {
	return (
		<motion.h1
			className={`text-6xl font-semibold capitalize ${className}`}
			variants={inViewVariants}
			initial={reverse ? "fromLeft" : "fromRight"}
			whileInView="visible"
			transition={{
				duration: 0.4,
				delay,
			}}
			viewport={{ once: true, amount: 0.25 }}
		>
			{children}
		</motion.h1>
	);
};

export default Heading;
