import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/config/animations";

const SubHeading = ({
	children,
	reverse,
	delay,
	className,
}: {
	children: React.ReactNode;
	reverse?: boolean;
	delay?: number;
	className?: string;
}) => {
	return (
		<motion.h2
			className={`text-3xl font-semibold opacity-80 mt-4 ${className}`}
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
		</motion.h2>
	);
};

export default SubHeading;
