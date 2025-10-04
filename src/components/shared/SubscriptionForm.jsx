import { useState } from "react";
import clsx from "clsx";

const SubscriptionForm = ({ variant }) => {
	const [email, setEmail] = useState("");

	const handleFormSubmit = (ev) => {
		ev.preventDefault();

		if (email === "") {
			return alert("Please enter your email.");
		}
		alert("Thanks for subscribing us.");
	};

	return (
		<form
			onSubmit={handleFormSubmit}
			className={clsx("mt-[34px] flex flex-col sm:justify-center lg:justify-start")}>
			<div className="flex flex-col gap-[15px] 2xl:flex-row">
				<input
					className="h-[60px] w-full px-[24px] py-[10px] rounded-[5px] bg-[#EFF3F7] outline-0 placeholder:text-secondary placeholder:opacity-40 placeholder:leading-[40px] "
					type="email"
					placeholder="Enter Email address"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button
					className="h-[60px] w-full 2xl:w-[150px] rounded-[5px] bg-accent text-white text-lg font-bold leading-[40px] "
					type="submit">
					Subscribe
				</button>
			</div>

			{variant === "subscribe-us-section" && (
				<div className="mt-[20px] flex items-center gap-[8px]">
					<p className="self-start leading-[32px]">
						<input
							type="checkbox"
							id="promotional-message"
						/>
					</p>
					<label
						className="subscription-question"
						htmlFor="promotional-message">
						Don’t provide any promotional message.
					</label>
				</div>
			)}
		</form>
	);
};

export default SubscriptionForm;
