const Logo = ({
	w,
	h,
	darkMode,
}: {
	w: number;
	h: number;
	darkMode?: boolean;
}) => {
	return (
		<h1 className="text-white text-3xl">
			{/* T<span className="text-primary">E</span>M */}
			<img src="/logo.png" alt="thurman T gold logo" className="w-10 h-10" />
		</h1>
	);
};

export default Logo;
