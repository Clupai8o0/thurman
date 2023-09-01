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
			T<span className="text-primary">E</span>M
		</h1>
	);
};

export default Logo;
