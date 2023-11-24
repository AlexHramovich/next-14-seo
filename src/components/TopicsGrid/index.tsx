import Link from "next/link";

const TOPICS = [
  {
    title: "Rendering strategy",
    description:
      "Strategies and techniques for efficient rendering of web pages.",
    link: "/rendering",
  },
  {
    title: "Meta tags",
    description:
      "Including title, description, canonical tags for SEO and web page identification.",
    link: "/meta-tags",
  },
  {
    title: "Sitemap, robots.txt",
    description:
      "Tools for guiding search engines in website navigation and indexing.",
    link: "#",
  },
  {
    title: "Localisation",
    description:
      "Localisation practices, possibly using 'ahref' for multilingual support.",
    link: "#",
  },
  {
    title: "Images and fonts optimization",
    description:
      "Optimizing images and fonts for better performance and load times.",
    link: "#",
  },
  {
    title: "Core web vitals",
    description:
      "Essential metrics for a healthy, user-friendly web experience.",
    link: "#",
  },
  {
    title: "Structured data",
    description:
      "Implementing structured data for enhanced search engine understanding.",
    link: "#",
  },
  {
    title: "Redirects",
    description:
      "Effective use of redirects for site structure and URL management.",
    link: "#",
  },
  {
    title: "AMP",
    description:
      "Accelerated Mobile Pages for faster loading on mobile devices.",
    link: "#",
  },
];

const TopicsGrid: React.FC = () => {
  return (
    <div className="grid grid-flow-row-dense gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-clos-1">
      {TOPICS.map((topic) => (
        <Link key={topic.title} href={topic.link}>
          <div
            key={topic.title}
            className="card glass h-full w-full bg-base-100 shadow-xl hover:bg-primary hover:text-primary-content transition-all"
          >
            <div className="card-body">
              <h2 className="card-title">{topic.title}</h2>
              <p>{topic.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopicsGrid;
