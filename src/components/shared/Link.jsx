import clsx from "clsx";

const Link = ({ href = "#", text, mt }) => {
	return (
		<a
			href={href}
			className={clsx("link-text flex items-center gap-[10px]", mt)}>
			<span>{text}</span>
			<img
				src="images/icons/gt.svg"
				alt="Chevron right"
				className="size-[10px]"
			/>
		</a>
	);
};

export default Link;
