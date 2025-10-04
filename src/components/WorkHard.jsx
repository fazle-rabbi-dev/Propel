import PageContainer from "./shared/PageContainer";
import Link from "./shared/Link";
import { benefitItems } from "@lib/constants";

const WorkHard = () => {
	// Calculate the midpoint to split the array into two halves
	const half = Math.ceil(benefitItems.length / 2);
	const firstColumnItems = benefitItems.slice(0, half);
	const secondColumnItems = benefitItems.slice(half);

	return (
		<PageContainer className="mt-[120px] lg:mt-[244px] grid grid-cols-1 lg:grid-cols-2 items-center">
			{/* Left column */}
			<div className="">
				<div className="text-center lg:text-left">
					<h2 className="section-title-lg">Don’t work hard, be smart & work smartly. Take a relax sit</h2>
					<p className="section-sub-title-2 mt-[27px]">
						Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines
						ever.
					</p>
				</div>

				<ul className="mt-[25px] grid grid-cols-1 min-[500px]:grid-cols-2 ">
					{firstColumnItems?.map((item) => (
						<li
							key={item.text}
							className="work-hard-list-item">
							<img
								src={item.icon}
								alt="Check icon   "
								className=""
							/>
							<p className="">{item.text}</p>
						</li>
					))}

					{secondColumnItems?.map((item) => (
						<li
							key={item.text}
							className="work-hard-list-item">
							<img
								src={item.icon}
								alt="Check icon   "
								className=""
							/>
							<p className="">{item.text}</p>
						</li>
					))}
				</ul>

				<Link
					text="Explore more"
					mt="mt-[25px]"
				/>
			</div>

			{/* Right column */}
			<div className="">
				<img
					src="images/illustrations/work-hard.svg"
					alt="Work hard"
					className=""
				/>
			</div>
		</PageContainer>
	);
};

export default WorkHard;
