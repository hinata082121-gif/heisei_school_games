import { ArticleCard } from "@/components/ArticleCard";
import type { BlogPost } from "@/data/blogPosts";

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <ArticleCard
      category={post.category}
      description={post.description}
      href={`/blog/${post.slug}`}
      publishedAt={post.publishedAt}
      readingTime={post.readingTime}
      tags={post.tags}
      title={post.title}
    />
  );
}
