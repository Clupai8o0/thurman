import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/config/animations";
import {
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from "react-accessible-accordion";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = ({
	title,
	info,
	delay,
}: {
	title: string;
	info: string;
	delay?: number;
}) => {
	return (
		<motion.div
			variants={inViewVariants}
			initial="fromRight"
			whileInView="visible"
			transition={{
				duration: 0.4,
				delay,
			}}
			viewport={{ once: true, amount: 0.25 }}
		>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton className="flex justify-between border border-gray-400 p-4 rounded-lg font-semibold text-lg items-center mb-4">
						{title} <IoIosArrowDown />
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="opacity-80 mb-4">
					{info}
				</AccordionItemPanel>
			</AccordionItem>
		</motion.div>
	);
};

export default FAQ;
