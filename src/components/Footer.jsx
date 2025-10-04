import Logo from "./shared/Logo";
import { footerNavItems } from "@lib/constants";

const Footer = () => {
	return (
		<footer className="max-width-container mt-[50px] pb-[50px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 px-10 lg:px-16">
			<div className="space-y-[20px]">
				<Logo />
				<p className="text-sm text-primary">Terms of use | Privacy</p>
				<p className="text-sm text-primary opacity-60">Copyright by 2019 Redq, Inc</p>
			</div>

			{/* Links */}
			{footerNavItems?.map((item) => (
				<NavColumn
					key={item.category}
					{...item}
				/>
			))}
		</footer>
	);
};

export default Footer;

// * ----------------------------- Sub Component -----------------------------
const NavColumn = ({ category, links }) => {
	return (
		<div className="">
			<h2 className="footer-nav-category mb-[10px] xl:mb-[28px]">{category}</h2>
			<ul className="">
				{links?.map((link) => (
					<li>
						<a
							href={link.href}
							className="footer-nav-link-text">
							{link.text}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
