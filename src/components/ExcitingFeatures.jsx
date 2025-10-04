import PageContainer from "./shared/PageContainer";
import { accordionItems } from "@lib/constants";
import AccordionItem from "./sub-components/AccordionItem";

const ExcitingFeatures = () => {
	return (
		<PageContainer className="mt-[120px] lg:mt-[220px] grid grid-cols-1 lg:grid-cols-2 items-center">
			{/* Left column */}
			<div className="">
				<img
					src="images/illustrations/exciting-feature-mockup.svg"
					alt=""
					className=""
				/>
			</div>

			{/* Right column */}
			<div className="">
				<div className="text-center lg:text-left">
					<h2 className="section-title-lg">Meet our exciting features that make you wow</h2>
					<p className="section-sub-title mt-[26px]">
						Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.
					</p>
				</div>

				<ul className="mt-[40px] space-y-[20px] ">
					{accordionItems?.map((item) => (
						<AccordionItem
							key={item.title}
							{...item}
						/>
					))}
				</ul>
			</div>
		</PageContainer>
	);
};

export default ExcitingFeatures;
