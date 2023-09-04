import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiFillFacebook, AiFillMail } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { navLinks, socialLinks } from "@/config/links";
import { v4 as generateKey } from "uuid";

function Footer({ className }: { className?: string }) {
	return (
		<footer
			className={`bg-bg border-t border-gray-700 py-12 md:py-18 w-full p-h ${className}`}
		>
			<div className="w-full max-w-screen-xl mx-auto">
				<div className="sm:flex sm:items-center sm:justify-between">
					<Link
						href="/"
						className="flex items-center mb-4 sm:mb-0"
						aria-label="Thurman logo"
					>
						<span className="self-center text-4xl whitespace-nowrap text-white ml-4">
							<>
								T<span className="text-primary">H</span>UR
								<span className="text-primary">M</span>AN
							</>
						</span>
					</Link>

					<ul className="flex flex-col md:flex-row gap-4 lg:gap-8 items-start md:items-center my-8 md:m-0">
						{navLinks.map((link) => (
							<li key={generateKey()}>
								<Link
									href={link.href}
									className="link text-white hover:opacity-80 cursor-pointer text-xl hover:text-primary transition duration-300 ease-in-out"
									title={link.name}
									aria-label={link.name}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<hr className="my-6 border-gray-900 sm:mx-auto lg:my-8" />

				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2023 THURMAN™. All Rights Reserved.
					</span>

					<div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
						<a
							href={socialLinks.instagram}
							className="text-gray-300 hover:text-primary transition duration-300 ease-in-out"
							target="_blank"
							aria-label="thurman instagram link"
						>
							<AiFillInstagram className="w-6 h-6" />
							<span className="sr-only">Instagram Page</span>
						</a>
						<a
							href={`mailto:${socialLinks.mail}`}
							className="text-gray-300 hover:text-primary transition duration-300 ease-in-out"
							target="_blank"
							aria-label="thurman email redirect link"
						>
							<AiFillMail className="w-6 h-6" />
							<span className="sr-only">Email Link</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
