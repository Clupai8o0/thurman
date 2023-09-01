import React from "react";
import { Accordion } from "react-accessible-accordion";

function FAQsContainer({ children }: { children: React.ReactNode }) {
	return (
		<Accordion allowZeroExpanded className="flex flex-col mt-6">
			{children}
		</Accordion>
	);
}

export default FAQsContainer;
