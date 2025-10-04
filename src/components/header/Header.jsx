import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "../shared/Logo";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import UserActions from "./UserActions";

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const toggleMenu = () => {
		setIsOpenMenu((prev) => !prev);

		// * Note: isOpenMenu here refers to the previous state, so the scrollbar will be hidden when opening the menu and restored when closing.
		document.body.style.overflow = isOpenMenu ? "auto" : "hidden";
	};

	return (
		<div className="">
			<header className="h-[40px] mt-4 mb-2 px-4 lg:px-16 lg:max-w-[1300px] 2xl:max-w-[1700px] mx-auto flex justify-between items-center gap-4 flex-wrap ">
				<div className="space-x-6 flex items-center gap-[50px]">
					<Logo />
					<DesktopNavBar />
				</div>

				<div className="flex items-center gap-8">
					<UserActions />
					<button
						className="lg:hidden "
						onClick={toggleMenu}>
						<Menu />
					</button>
				</div>
			</header>

			{/* Mobile navbar */}
			{isOpenMenu && (
				<div className="fixed inset-0 w-full h-full p-10 bg-black/80 backdrop-blur ">
					<div className="bg-white rounded-2xl p-10">
						<button
							className="ms-auto block mb-4 sm:mb-2"
							onClick={toggleMenu}>
							<X />
						</button>
						<MobileNavBar />
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
