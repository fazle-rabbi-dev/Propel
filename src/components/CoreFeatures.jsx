import PageContainer from "./shared/PageContainer";
import { coreFeatures } from "@lib/constants";
import Link from "./shared/Link";

const CoreFeatures = () => {
	return (
		<PageContainer className="mt-[100px] 2xl:mt-[180px] pt-[70px]">
			<div className="text-center">
				<h2 className="section-title">Ultimate features you must appreciate</h2>
				<p className="section-sub-title mt-[20px] max-w-lg mx-auto">
					Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred.
				</p>
			</div>

			<div className="mt-[80px] sm:mt-[110px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center space-x-[35px] space-y-[45px] lg:space-x-[60px] lg:space-y-[80px] ">
				{coreFeatures?.map((feature) => (
					<FeatureCard
						key={feature.title}
						{...feature}
					/>
				))}
			</div>
		</PageContainer>
	);
};

export default CoreFeatures;

// * ----------------------------- Sub Component -----------------------------
const FeatureCard = ({ icon, title, description }) => {
	return (
		<div className="flex flex-col items-center">
			<img
				src={icon}
				alt={title}
				className="size-[70px]"
			/>
			<h3 className="mt-[28px] feature-card-title text-center">{title}</h3>
			<p className="mt-[15px] text-body text-center">{description}</p>
			<Link
				text="Learn more"
				mt="mt-[20px]"
			/>
		</div>
	);
};
