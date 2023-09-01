import React from 'react'
import { motion } from 'framer-motion'
import { inViewVariants } from '@/config/animations'

const Quote = ({
	children,
	reverse,
	delay,
  author
}: {
	children: React.ReactNode;
	reverse?: boolean;
	delay?: number;
  author?: string
}) => {
	return (
		<motion.q
			className="text-lg leading-tight mt-4 py-2 italic"
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
      <span>{`--${author}`}</span>
		</motion.q>
	);
};

export default Quote