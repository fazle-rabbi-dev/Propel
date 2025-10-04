import Link from "./shared/Link";
import PageContainer from "./shared/PageContainer";

const CustomerProof = () => {
	return (
		<PageContainer className="mt-[130px] grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-center ">
			<div className="">
				<img
					src="images/illustrations/customer.svg"
					alt="Customer"
					className="w-full"
				/>
			</div>

			<div className="">
				<div className="text-center lg:text-left">
					<h2 className="section-title-lg">We have more than thousand of worldwide happy customer</h2>
					<p className="section-sub-title-2 mt-[35px]">
						Coworking offers beautifully crafted workspaces where people can create, connect, and grow their businesses at prime locations in
						multiple cities.
					</p>
				</div>
				<Link
					text="Learn more"
					mt="mt-[40x]"
				/>
			</div>
		</PageContainer>
	);
};

export default CustomerProof;
