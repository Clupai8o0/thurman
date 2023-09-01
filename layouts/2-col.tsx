import { Heading } from "@/components";
import React from "react";

function TwoColumnsLayout({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) {
	return (
		<section className="w-full flex justify-center p-h py-16">
			<div className="max-w-7xl w-full">
				<Heading className="mb-8">{title}</Heading>
				<div className="flex flex-col md:flex-row gap-8">{children}</div>
			</div>
		</section>
	);
}

export default TwoColumnsLayout;
