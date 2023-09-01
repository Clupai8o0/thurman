import React from "react";
import { motion } from "framer-motion";
import { v4 as generateKey } from "uuid";

import { TwoColumnsLayout } from "@/layouts";
import { SubHeading } from "..";
import { inViewVariants } from "@/config/animations";

const Itinerary = () => {
	return (
		<TwoColumnsLayout title="Itinerary">
			<div className="md:w-1/2 flex flex-col items-start justify-start">
				<SubHeading className="mb-8">Friday, 24th August, 2023</SubHeading>
				<ol className="relative border-l border-blue-400">
					{[
						{
							time: "8:00-8:45",
							name: "Registration",
							desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: true,
						},
						{
							time: "8:45-9:30",
							name: "Opening Ceremony",
							desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
						{
							time: "9:45-12:30",
							name: "Council Session One",
							desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
					].map(({ time, name, desc, start }) => (
						<li className="mb-10 ml-4" key={generateKey()}>
							<div
								className={`absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -left-1.5 border border-white ${
									start && "mt-0"
								}`}
							></div>
							<time
								className={`mb-1 text-sm font-normal leading-none text-gray-600`}
							>
								{time}
							</time>
							<motion.div
								variants={inViewVariants}
								initial={"fromLeft"}
								whileInView="visible"
								transition={{
									duration: 0.4,
								}}
								viewport={{ once: true, amount: 0.25 }}
							>
								<h3 className="text-lg font-semibold text-gray-900">{name}</h3>
								<p className="mb-4 text-base font-normal text-gray-700">
									{desc}
								</p>
							</motion.div>
						</li>
					))}
					<li className="ml-4">
						<div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-1.5 border border-white"></div>
						<time className="absolute text-sm font-normal leading-none text-gray-600">
							End
						</time>
					</li>
				</ol>
			</div>
			<div className="md:w-1/2 flex flex-col items-start justify-start">
				<SubHeading className="mb-8">Friday, 24th August, 2023</SubHeading>
				<ol className="relative border-l border-blue-400">
					{[
						{
							time: "8:00-8:45",
							name: "Registration",
							desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: true,
						},
						{
							time: "8:45-9:30",
							name: "Opening Ceremony",
							desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
						{
							time: "9:45-12:30",
							name: "Council Session One",
							desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
					].map(({ time, name, desc, start }) => (
						<li className="mb-10 ml-4" key={generateKey()}>
							<div
								className={`absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -left-1.5 border border-white ${
									start && "mt-0"
								}`}
							></div>
							<time
								className={`mb-1 text-sm font-normal leading-none text-gray-600`}
							>
								{time}
							</time>
							<motion.div
								variants={inViewVariants}
								initial={"fromLeft"}
								whileInView="visible"
								transition={{
									duration: 0.4,
								}}
								viewport={{ once: true, amount: 0.25 }}
							>
								<h3 className="text-lg font-semibold text-gray-900">{name}</h3>
								<p className="mb-4 text-base font-normal text-gray-700">
									{desc}
								</p>
							</motion.div>
						</li>
					))}
					<li className="ml-4">
						<div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-1.5 border border-white"></div>
						<time className="absolute text-sm font-normal leading-none text-gray-600">
							End
						</time>
					</li>
				</ol>
			</div>
		</TwoColumnsLayout>
	);
};

export default Itinerary;
