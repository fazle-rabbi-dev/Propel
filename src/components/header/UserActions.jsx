import React from "react";

const UserActions = () => {
	return (
		<div className="hidden min-[390px]:flex items-center gap-7">
			<a
				href="#"
				className="font-medium text-primary leading-[33px]">
				Login
			</a>
			<div className="relative">
				<a
					href="#"
					className="font-bold text-accent leading-[33px] ">
					Get Started
				</a>
				<img
					src="/images/underline.svg"
					alt="Underline"
					className="absolute"
				/>
			</div>
		</div>
	);
};

export default UserActions;
