import PageContainer from "./shared/PageContainer";
import { blogs } from "@lib/constants";

const BlogPosts = () => {
	return (
		<PageContainer className="mt-[145px]">
			<div className="text-center">
				<h2 className="section-title-lg">Popular blog post we update everyday</h2>
				<p className="section-sub-title mt-[35px] max-w-lg mx-auto">
					Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click.
				</p>
			</div>

			<div className="mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[45px]">
				{blogs?.map((blog) => (
					<article>
						<img
							src={`/images/blog-${blog.id}.png`}
							alt={blog.title}
							className="w-full"
						/>
						<h3 className="blog-title">{blog.title}</h3>
						<p className="blog-comment">
							<img
								src="/images/icons/comment.png"
								alt="Comment"
								className=""
							/>
							<span>{blog.comment}</span>
							<span>Comments</span>
						</p>
					</article>
				))}
			</div>
		</PageContainer>
	);
};

export default BlogPosts;
