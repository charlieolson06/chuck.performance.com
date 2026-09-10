import { Feed } from "feed";
import { getAllPosts } from "@/lib/posts";

const SITE_URL = "https://example.com";

export function GET() {
  const feed = new Feed({
    title: "Your Name",
    description: "Portfolio and blog.",
    id: SITE_URL,
    link: SITE_URL,
    copyright: `${new Date().getFullYear()} Your Name`,
  });

  for (const post of getAllPosts()) {
    feed.addItem({
      title: post.title,
      id: `${SITE_URL}/blog/${post.slug}`,
      link: `${SITE_URL}/blog/${post.slug}`,
      description: post.summary,
      date: new Date(post.date),
    });
  }

  return new Response(feed.rss2(), {
    headers: { "Content-Type": "application/xml" },
  });
}
