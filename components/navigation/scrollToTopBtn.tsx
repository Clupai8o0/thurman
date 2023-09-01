const ScrollToTopBtn = () => {
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="w-full flex justify-center py-8 p-h">
			<div className="max-w-7xl w-full flex justify-end">
				<button className="stt" onClick={goToTop}>
					<div className="text">
						<span>Back</span>
						<span>to</span>
						<span>top</span>
					</div>
					<div className="clone">
						<span>Back</span>
						<span>to</span>
						<span>top</span>
					</div>
					<svg
						width="20px"
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default ScrollToTopBtn;
