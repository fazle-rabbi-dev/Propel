import PageContainer from "./shared/PageContainer";
import { services } from "@lib/constants";

const Service = () => {
	return (
		<PageContainer className="mt-[100px] 2xl:mt-[150px] ">
			<div className="text-center">
				<h2 className="section-title">Successful business start with great feature</h2>
				<p className="section-sub-title mt-[20px] max-w-lg mx-auto">
					Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.
				</p>
			</div>

			<div className="mt-[60px] 2xl:mt-[80px] flex flex-col lg:flex-row gap-[40px]">
				{services?.map((item) => (
					<div className="flex flex-wrap min-[300px]:flex-nowrap gap-[30px]">
						<img
							src={item.icon}
							alt={item.label}
							className="size-[70px] "
						/>
						<div className="">
							<h3 className="feature-card-title"> {item.label} </h3>
							<p className="text-body mt-[10px] ">{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</PageContainer>
	);
};

export default Service;
