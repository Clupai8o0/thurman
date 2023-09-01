import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { inViewVariants } from "@/config/animations";

const FloatingScrollToTopBtn = ({ openSidebar }: { openSidebar: boolean }) => {
	const [showBtn, setShowBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) setShowBtn(true);
			else setShowBtn(false);

			if (window.scrollY > window.document.body.offsetHeight - 1400)
				setShowBtn(false);
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<motion.div
			className={`relative ${openSidebar && "hidden"}`}
			variants={inViewVariants}
			initial="fromBottom"
			animate="visible"
			transition={{ duration: 0.4 }}
		>
			{showBtn && (
				<button
					className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-primary text-black rounded-full p-4 flex items-center gap-2 cursor-pointer duration-300 ease-in-out shadow-md hover:shadow-2xl hover:scale-110 focus:scale-95 active:scale-100"
					onClick={goToTop}
				>
					<FiArrowUp className="w-6 h-6" />{" "}
					<span className="hidden md:flex text-xl text-black mb-1 font-semibold">Go Back To Top</span>
				</button>
			)}
		</motion.div>
	);
};

export default FloatingScrollToTopBtn;
