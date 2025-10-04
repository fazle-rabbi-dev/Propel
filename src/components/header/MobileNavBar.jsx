import { ChevronDown } from "lucide-react";
import { navbarItems } from "@lib/constants";

const MobileNavBar = () => {
	return (
		<nav className="">
			<ul className="flex flex-col items-center gap-7 leading-[10px] text-secondary ">
				{navbarItems?.map((item) => {
					if (item.hasDropdown) {
						return (
							<li
								key={item.label}
								className="flex items-center gap-1 cursor-default">
								<span>{item.label}</span>
								<ChevronDown size={18} />
							</li>
						);
					}

					return (
						<li
							key={item.label}
							className="">
							<a
								href={item.href}
								className="">
								{item.label}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default MobileNavBar;
