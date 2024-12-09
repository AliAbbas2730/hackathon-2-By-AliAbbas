
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Exploring the Latest Design Trends",
      excerpt: "Discover what's hot in the world of design this year.",
      date: "December 1, 2024",
    },
    {
      id: 2,
      title: "Tips for Optimizing Web Performance",
      excerpt: "Learn how to make your websites faster and more efficient.",
      date: "November 28, 2024",
    },
    {
      id: 3,
      title: "The Future of JavaScript Frameworks",
      excerpt: "A look at the evolving landscape of front-end development.",
      date: "November 25, 2024",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <main className="flex-grow max-w-7xl mx-auto px-4 py-12">
        <h1
          id="blog-heading"
          className="text-4xl font-extrabold text-gray-800 text-center mb-12"
        >
          Our Blog
        </h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          aria-labelledby="blog-heading"
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <span className="text-sm text-gray-500">{post.date}</span>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-[#B88E2F] hover:underline font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
