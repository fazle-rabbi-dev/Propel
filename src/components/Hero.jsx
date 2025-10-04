import PageContainer from "./shared/PageContainer";
import SubscriptionForm from "./shared/SubscriptionForm";

const Hero = () => {
	return (
		<PageContainer className="mt-[40px] md:mt-[60px] grid grid-cols-1 lg:grid-cols-2 items-center ">
			{/* Left column */}
			<div className="order-2 lg:order-1">
				<div className="text-center lg:text-left ">
					<h1 className="mt-10 mt:mt-0 font-crimson-text font-semibold text-[40px] md:text-[60px] 2xl:text-[72px] leading-[50px] lg:leading-[65px] 2xl:leading-[80px] text-secondary  ">
						Build your audience & grow your business online smarter
					</h1>
					<p className="mt-[24px] text-lg leading-[32px] sm:leading-[42px] text-secondary ">
						Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best design system
						guidelines ever.
					</p>
				</div>

				<SubscriptionForm />

				<div className="mt-[35px] flex flex-col flex-wrap md:flex-row justify-center lg:justify-start items-center gap-[21px] ">
					<p className="leading-[42px] text-muted opacity-60 ">Sponsored by:</p>
					<div className="flex flex-wrap justify-center items-center gap-[28px] ">
						<img
							src="images/icons/paypal.svg"
							alt="Paypal"
							className=""
						/>
						<img
							src="images/icons/google.svg"
							alt="Google"
							className=""
						/>
						<img
							src="images/icons/dropbox.svg"
							alt="Dropbox"
							className=""
						/>
					</div>
				</div>
			</div>

			{/* Right column */}
			<div className="order-1 lg:order-2">
				<img
					src="images/illustrations/hero.svg"
					alt="Hero man"
					className="w-full"
				/>
			</div>
		</PageContainer>
	);
};

export default Hero;
