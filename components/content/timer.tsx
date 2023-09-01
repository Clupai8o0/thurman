import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { inViewVariants } from "@/config/animations";
import { eventDate, eventDateInWords } from "@/config/details";

const Timer = ({
	delay,
	mini,
	darkMode,
	whileInView,
}: {
	delay?: number;
	mini?: boolean;
	darkMode?: boolean;
	whileInView?: boolean;
}) => {
	const [days, setDays] = useState(99);
	const [hours, setHours] = useState(99);
	const [minutes, setMinutes] = useState(99);
	const [seconds, setSeconds] = useState(99);

	useEffect(() => {
		const t = eventDate.split(/[- : T]/);
		const targetTime = new Date(
			parseInt(t[0]),
			parseInt(t[1]) - 1,
			parseInt(t[2]),
			parseInt(t[3]),
			parseInt(t[4]),
			parseInt(t[5])
		); //! IOS SUPPORT FIX
		const now = new Date();
		const difference = targetTime.getTime() - now.getTime();

		let gSeconds = Math.floor(difference / 1000),
			gMinutes = Math.floor(gSeconds / 60),
			gHours = Math.floor(gMinutes / 60),
			gDays = Math.floor(gHours / 24);
		gHours %= 24;
		gMinutes %= 60;
		gSeconds %= 60;

		setSeconds(gSeconds);
		setMinutes(gMinutes);
		setHours(gHours);
		setDays(gDays);

		const timerInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					if (hours === 0) {
						if (days === 0) {
							clearInterval(timerInterval);
						} else {
							setDays(days - 1);
							setHours(23);
						}
					} else {
						setHours(hours - 1);
						setMinutes(59);
					}
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
		}, 1000);
		return () => {
			clearInterval(timerInterval);
		};
	});

	return mini ? (
		<div className="grid grid-flow-col gap-2 md:gap-4 text-center auto-cols-max my-4 relative z-10">
			<div
				className={`timer-container-mini ${
					darkMode && "bg-white bg-opacity-5"
				}`}
			>
				<span className={`number-span-mini ${darkMode && "text-white"}`}>
					<span>{days < 10 ? `0${days}` : days}</span>
				</span>
				<span className={`detail-span-mini ${darkMode && "text-white"}`}>
					days
				</span>
			</div>
			<div
				className={`timer-container-mini ${
					darkMode && "bg-white bg-opacity-5"
				}`}
			>
				<span className={`number-span-mini ${darkMode && "text-white"}`}>
					<span>{hours < 10 ? `0${hours}` : hours}</span>
				</span>
				<span className={`detail-span-mini ${darkMode && "text-white"}`}>
					hours
				</span>
			</div>
			<div
				className={`timer-container-mini ${
					darkMode && "bg-white bg-opacity-5"
				}`}
			>
				<span className={`number-span-mini ${darkMode && "text-white"}`}>
					<span>{minutes < 10 ? `0${minutes}` : minutes}</span>
				</span>
				<span className={`detail-span-mini ${darkMode && "text-white"}`}>
					min
				</span>
			</div>
			<div
				className={`timer-container-mini ${
					darkMode && "bg-white bg-opacity-5"
				}`}
			>
				<span className={`number-span-mini ${darkMode && "text-white"}`}>
					<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
				</span>
				<span className={`detail-span-mini ${darkMode && "text-white"}`}>
					sec
				</span>
			</div>
		</div>
	) : (
		<div className="flex flex-col items-center mb-2">
			<motion.div
				className="grid grid-flow-col gap-2 md:gap-4 text-center auto-cols-max my-4 md:my-6 relative z-10"
				variants={inViewVariants}
				initial="fromDown"
				animate="visible"
				transition={{
					duration: 0.4,
					delay,
				}}
			>
				<div className="timer-container">
					<span className="number-span">
						<span>{days < 10 ? `0${days}` : days}</span>
					</span>
					<span className="detail-span">days</span>
				</div>
				<div className="timer-container">
					<span className="number-span">
						<span>{hours < 10 ? `0${hours}` : hours}</span>
					</span>
					<span className="detail-span">hours</span>
				</div>
				<div className="timer-container">
					<span className="number-span">
						<span>{minutes < 10 ? `0${minutes}` : minutes}</span>
					</span>
					<span className="detail-span">min</span>
				</div>
				<div className="timer-container">
					<span className="number-span">
						<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
					</span>
					<span className="detail-span">sec</span>
				</div>
			</motion.div>
			<motion.span
				className="text-white font-medium relative z-10"
				variants={inViewVariants}
				initial="fromDown"
				animate={!whileInView ? "visible" : ""}
				whileInView={whileInView ? "visible" : ""}
				viewport={{ once: true, amount: 0.25 }}
				transition={{
					duration: 0.6,
					delay,
				}}
			>
				{eventDateInWords}
			</motion.span>
		</div>
	);
};

export default Timer;
