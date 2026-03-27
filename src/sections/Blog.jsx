import ScrollReveal from "../components/ScrollReveal";

const blogPosts = [
  {
    title: "How BART Powers Alternative Credit Scoring",
    excerpt:
      "Exploring how we used the BART transformer model to analyze transaction descriptions and estimate CIBIL score trends from financial behavior patterns.",
    date: "Mar 2026",
    readTime: "5 min read",
    href: "https://github.com/navin-oss/CodeKshetra_FinBehaviour-",
    tag: "AI/ML",
    tagColor: "from-aqua to-mint",
  },
  {
    title: "Building a Voice-Controlled AI Assistant",
    excerpt:
      "A deep dive into integrating DeepSeek R1 API with speech recognition to create a multilingual Jarvis-like assistant that executes system commands.",
    date: "Feb 2026",
    readTime: "4 min read",
    href: "https://github.com/navin-oss/JArvis-",
    tag: "Python",
    tagColor: "from-lavender to-royal",
  },
  {
    title: "Ranking 3rd in Aperture 3.0",
    excerpt:
      "My open-source journey: 158 PRs merged across SwapSmith, FinnovatePay, InnerHue, and CropChain — all live in production.",
    date: "Jan 2026",
    readTime: "6 min read",
    href: "https://github.com/navin-oss",
    tag: "Open Source",
    tagColor: "from-fuchsia to-coral",
    links: [
      { label: "SwapSmith", url: "https://swap-smith.vercel.app/" },
      { label: "FinnovatePay", url: "https://finovate-pay.vercel.app/contributors" },
      { label: "InnerHue", url: "https://inner-hue.vercel.app/" },
    ],
  },
];

const BlogCard = ({ post, index }) => (
  <ScrollReveal delay={index * 0.15} direction="up">
    <a
      href={post.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full p-6 transition-all duration-300 border group bg-gradient-to-b from-storm to-indigo rounded-2xl border-white/10 hover:border-white/25 hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${post.tagColor} text-white`}
        >
          {post.tag}
        </span>
        <span className="text-xs text-neutral-500">{post.date}</span>
        <span className="text-xs text-neutral-500">•</span>
        <span className="text-xs text-neutral-500">{post.readTime}</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-lavender">
        {post.title}
      </h3>
      <p className="text-sm leading-relaxed text-neutral-400">
        {post.excerpt}
      </p>
      {post.links && (
        <div className="flex flex-wrap gap-2 mt-3">
          {post.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1 text-xs font-medium transition-colors border rounded-full text-aqua border-aqua/30 hover:bg-aqua/10"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
      <div className="flex items-center gap-1 mt-4 text-sm font-medium transition-colors text-lavender group-hover:text-white">
        Read more
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </a>
  </ScrollReveal>
);

const Blog = () => {
  return (
    <section className="c-space mt-20 md:mt-30" id="blog">
      <ScrollReveal>
        <h2 className="text-heading">Thoughts & Insights</h2>
        <p className="mt-3 subtext">
          Writing about AI/ML, open source, and software engineering
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} post={post} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
