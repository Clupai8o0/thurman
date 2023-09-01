import { CTA } from "@/components";
import React from "react";

function NotFound() {
	return (
		<section className="bg-zinc-900 w-full pt-36">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">
						404
					</h1>
					<p className="mb-4 text-3xl tracking-tight font-semibold md:text-4xl text-gray-200">
						Something's missing.
					</p>
					<p className="mb-4 text-lg font-light text-gray-400">
						Sorry, we can't find that page.
					</p>
					<CTA href="/" title="Back to Home" className="my-4" />
				</div>
			</div>
		</section>
	);
}

export default NotFound;
