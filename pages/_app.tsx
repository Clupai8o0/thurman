import "@/styles/globals.css";
import type { AppProps } from "next/app";

// State management
import { useEffect, useState } from "react";

// Transition Animations & Loaders
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import NextTopLoader from "nextjs-toploader";

// Components
import {
	Footer,
	Navbar,
	FloatingScrollToTopButton,
	ScrollToTopButton,
	Sidebar,
	FloatingNav,
	TransitionOverlay,
} from "@/components";
import { navLinks } from "@/config/links";

export default function App({ Component, pageProps }: AppProps) {
	const pathname = usePathname();

	const [showScrollToTop, setShowScrollToTop] = useState(false);
	const [openSidebar, setOpenSidebar] = useState(false);

	useEffect(() => {
		navLinks.forEach((link) => {
			if (link.href === pathname) setShowScrollToTop(link.showScrollToTop);
		});
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
		setOpenSidebar(false);
	}, [pathname]);

	return (
		<AnimatePresence mode="wait">
			<TransitionOverlay />
			<NextTopLoader
				color="#26F705"
				initialPosition={0.08}
				crawlSpeed={200}
				height={3}
				crawl={true}
				showSpinner={false}
				easing="ease"
				speed={200}
				shadow="20px 20px 60px #20d204, -20px -20px 60px #2cff06"
			/>

			<div
				className={`relative transition-all duration-300 ${
					openSidebar ? "-translate-x-3/4 md:-translate-x-1/2" : "translate-x-0"
				} flex flex-col items-center w-full`}
				style={{
					width: "100vw",
				}}
			>
				<Navbar
					setOpenSidebar={setOpenSidebar}
					darkMode
					openSidebar={openSidebar}
				/>
				<Component {...pageProps} />

				{showScrollToTop && <ScrollToTopButton />}
				<Footer />
			</div>

			<FloatingNav setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />

			{/* Side Mobile Nav */}
			<Sidebar openSidebar={openSidebar} />
			<FloatingScrollToTopButton openSidebar={openSidebar} />
		</AnimatePresence>
	);
}
