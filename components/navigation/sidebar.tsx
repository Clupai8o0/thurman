// Icons
import { MdEmail } from "react-icons/md";
import { AiFillFacebook, AiFillInstagram, AiFillMail } from "react-icons/ai";

// Links
import { v4 as generateKey } from "uuid";
import Link from "next/link";
import { navLinks, socialLinks } from "@/config/links";

function Sidebar({ openSidebar }: { openSidebar: boolean }) {
	return (
		<div
			className={`top-0 transition-all duration-300 fixed bg-color-5 text-white w-3/4 md:w-1/2 max-h-screen h-full ${
				openSidebar ? "right-0" : "-right-3/4"
			} flex flex-col justify-between py-16`}
		>
			{/* LOGO */}
			<div className="w-full flex justify-center mb-8">
				<Link href="/">
					<img src="/complete-logo.png" alt="complete thurman gold logo with t and statement" className="w-28 h-28" />
				</Link>
			</div>

			{/* LINKS */}
			<ul className="flex flex-col gap-4 justify-center p-6">
				{navLinks.map((link) => (
					<li key={generateKey()}>
						<Link
							href={link.href}
							className="link uppercase text-xl"
							title={link.name}
							aria-label={link.name}
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>

			{/* SOCIALS */}
			<hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />

			<div className="sm:flex sm:items-center sm:justify-between p-6">
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2023 NMMUN™. All Rights Reserved.
				</span>

				<div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
					{/* <a
						href={socialLinks.facebook}
						className="text-gray-300 hover:text-white"
					>
						<AiFillFacebook className="w-8 h-8" />
						<span className="sr-only">Facebook Page</span>
					</a> */}
					<a
						href={socialLinks.instagram}
						className="text-gray-300 hover:text-white"
						target="_blank"
						aria-label="thurman instagram link"
					>
						<AiFillInstagram className="w-8 h-8" />
						<span className="sr-only">Instagram Page</span>
					</a>
					<a
						href={`mailto:${socialLinks.mail}`}
						className="text-gray-300 hover:text-white"
						target="_blank"
						aria-label="thurman mail redirect"
					>
						<AiFillMail className="w-8 h-8" />
						<span className="sr-only">Email Link</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
