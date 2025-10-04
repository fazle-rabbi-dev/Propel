import clsx from "clsx";

const PageContainer = ({ children, className }) => {
	return <section className={clsx("sm:max-w-2xl lg:max-w-[1300px] 2xl:max-w-[1700px] mx-auto px-10 lg:px-16", className)}>{children}</section>;
};

export default PageContainer;
