import { motion, cubicBezier } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

const TransitionOverlay = () => {
	const pathname = usePathname();

	return (
		<motion.div
			className="w-full h-full bg-bg fixed top-0 left-0 z-[1000] flex flex-col gap-8 justify-center items-center"
			initial={{
				x: 0,
			}}
			animate={{
				x: "-100%",
				transition: {
					delay: 1,
					duration: 0.4,
					ease: cubicBezier(0.77, 0, 0.18, 1),
				},
			}}
			exit={{
				x: 0,
			}}
			transition={{
				duration: 0.6,
			}}
			key={pathname}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					duration: 0.8,
				}}
			>
				<h1 className="text-white text-6xl">
					T<span className="text-primary">H</span>UR
					<span className="text-primary">M</span>AN
				</h1>
				<span className="text-white opacity-75 text-xl">
					Events <span className="text-primary">M</span>anage
					<span className="text-primary">m</span>ent
				</span>
			</motion.div>
			<div className="line-wobble"></div>
		</motion.div>
	);
};

export default TransitionOverlay;
