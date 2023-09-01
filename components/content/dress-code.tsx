import React from "react";
import { v4 as generateKey } from "uuid";
import { motion } from "framer-motion";

import { TwoColumnsLayout } from "@/layouts";
import { SubHeading } from "..";
import { inViewVariants } from "@/config/animations";

const DressCode = () => {
	return (
		<TwoColumnsLayout title="Dress Code">
			<div className="md:w-1/2 flex flex-col items-start justify-start">
				<SubHeading className="mb-8">Gentlemen</SubHeading>
				<ul className="space-y-4 text-left text-gray-700 font-medium">
					{[
						"Formal wear is insisted on; suits and ties must be worn.",
						"Blazers and jackets will need to be worn when speaking.",
						"Appropriate footwear needs to be work (no sneakers).",
					].map((code) => (
						<motion.li
							className="flex items-center space-x-3"
							key={generateKey()}
							variants={inViewVariants}
							initial={"fromLeft"}
							whileInView="visible"
							transition={{
								duration: 0.4,
							}}
							viewport={{ once: true, amount: 0.25 }}
						>
							<svg
								className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 16 12"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 5.917 5.724 10.5 15 1.5"
								/>
							</svg>
							<span>{code}</span>
						</motion.li>
					))}
				</ul>
			</div>
			<div className="md:w-1/2 flex flex-col items-start justify-start">
				<SubHeading className="mb-8">Ladies</SubHeading>
				<ul className="space-y-4 text-left text-gray-700 font-medium">
					{[
						"Formal wear is insisted on, blazers are encouraged but not required.",
						"Sleeveless, sheer and cut-out stops are not allowed.",
						"Formal dresses and skirts must not be too tightly fitted and the hemline must extend below the knee.",
						"Appropriate footwear needs to be worn (no brightly colored heels).",
					].map((code) => (
						<motion.li
							className="flex items-center space-x-3"
							key={generateKey()}
							variants={inViewVariants}
							initial={"fromLeft"}
							whileInView="visible"
							transition={{
								duration: 0.4,
							}}
							viewport={{ once: true, amount: 0.25 }}
						>
							<svg
								className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 16 12"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 5.917 5.724 10.5 15 1.5"
								/>
							</svg>
							<span>{code}</span>
						</motion.li>
					))}
				</ul>
			</div>
		</TwoColumnsLayout>
	);
};

export default DressCode;
