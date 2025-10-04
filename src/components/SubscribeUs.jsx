import SubscriptionForm from "./shared/SubscriptionForm";

const SubscribeUs = () => {
	return (
		// Full width container
		<section className="mt-[142px] bg-[url('images/subscribe-us-bg.png')] py-[70px] bg-cover bg-no-repeat">
			{/* Max width container */}
			<div className="max-width-container px-10 lg:px-16 3xl:px-70 ">
				{/* White box container */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center lg:gap-[80px] bg-white rounded-[25px] px-[15px] py-[14px] lg:px-[90px] lg:py-[52px]">
					<div className="">
						<h2 className="subscription-title">Like our service? Subscribe us</h2>
						<p className="subscription-description">We have more than thousand of creative entrepreneurs and stat joining our business</p>
					</div>

					<div className="">
						<SubscriptionForm variant="subscribe-us-section" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default SubscribeUs;
