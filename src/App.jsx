import { useEffect } from "react";

import Header from "@components/header/Header";
import Hero from "@components/Hero";
import Service from "@components/Service";
import ExcitingFeatures from "@components/ExcitingFeatures";
import WorkHard from "@components/WorkHard";
import CoreFeatures from "@components/CoreFeatures";
import CustomerProof from "@components/CustomerProof";
import BlogPosts from "@components/BlogPosts";
import SubscribeUs from "@components/SubscribeUs";
import Footer from "@components/Footer";

const App = () => {
	useEffect(() => {
		console.clear();

		console.log("%c⚡ Welcome to App name ⚡", "color: #ffffff; background: #000000; font-size:16px; padding:8px 12px; border-radius:8px;");

		console.log("%c👨‍💻 Built by Rabbi | MERN Stack Developer", "color:#00bcd4; font-size:14px;");

		console.log("%c💡 Tip: Stay curious, keep building!", "color:#4caf50; font-size:13px; font-style:italic;");
	}, []);

	return (
		<>
			<Header />
			<main className="">
				<Hero />
				<Service />
				<ExcitingFeatures />
				<WorkHard />
				<CoreFeatures />
				<CustomerProof />
				<BlogPosts />
				<SubscribeUs />
			</main>
			<Footer />
		</>
	);
};

export default App;
