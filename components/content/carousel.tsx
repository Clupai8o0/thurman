import { useState, useEffect } from "react";

export default function Carousel({
	children: slides,
	autoSlide = true,
	autoSlideInterval = 5000,
}: any) {
	const [curr, setCurr] = useState(0);

	const next = () =>
		setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	}, []);

	return (
		<div className="overflow-hidden relative w-full h-full">
			<div
				className="flex transition-transform ease-out duration-500 w-full h-full"
				style={{
					transform: `translateX(-${curr * 100}%)`,
					transition: "1s all cubic-bezier(0.65,0.05,0.36,1)",
				}}
			>
				{slides}
			</div>
		</div>
	);
}
