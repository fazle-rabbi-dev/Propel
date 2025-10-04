import { useState } from "react";
import clsx from "clsx";

const AccordionItem = ({ title, content }) => {
	const [isOpenAccordion, setIsOpenAccordion] = useState(false);

	const toggleAccordion = () => {
		setIsOpenAccordion((prev) => !prev);
	};

	return (
		<li className={clsx("py-[30px] px-[45px] rounded-md", isOpenAccordion ? "bg-white shadow" : "bg-[#F6F8FB]")}>
			<div className="flex justify-between items-center gap-4">
				<h3
					onClick={toggleAccordion}
					className="exciting-feature-card-title cursor-default">
					{title}
				</h3>
				<img
					onClick={toggleAccordion}
					src={isOpenAccordion ? "images/icons/close.png" : "images/icons/arrow-right.png"}
					alt="Open accordion"
					className={clsx("self-start mt-[6px]", isOpenAccordion ? "size-[18px]" : "w-[22px] h-[16px]")}
				/>
			</div>
			{isOpenAccordion && <p className="exciting-feature-card-text mt-[15px]">{content}</p>}
		</li>
	);
};

export default AccordionItem;
