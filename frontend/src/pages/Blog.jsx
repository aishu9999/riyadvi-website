import { Link } from "react-router-dom";
import { useState } from "react";
import blogPosts from "../data/blog";

function Blog() {
  
  const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");
const featuredPost = blogPosts[0];

const categories = [
  "All",
  ...new Set(blogPosts.map((post) => post.category)),
];

const filteredPosts = blogPosts.filter((post) => {
  const matchesSearch =
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    post.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

const remainingPosts = filteredPosts.filter(
  (post) => post.id !== featuredPost?.id
);
  return (
    <main className="blog-page">

      {/* HERO */}
      <section className="blog-hero">
        <p className="section-label">INSIGHTS & IDEAS</p>

        <h1>
          Technology,
          <span> Design & Growth</span>
        </h1>

        <p>
          Explore ideas and insights around technology, digital experiences,
          design, and business growth.
        </p>
      </section>


      {/* FEATURED ARTICLE */}
      {featuredPost && (
        <section className="blog-featured">
          <div className="blog-featured-content">
            <p className="section-label">FEATURED ARTICLE</p>

            <span className="blog-featured-category">
              {featuredPost.category}
            </span>

            <h2>{featuredPost.title}</h2>

            <p>{featuredPost.excerpt}</p>

            <Link
              to={`/blog/${featuredPost.id}`}
              className="primary-button"
            >
              Read Featured Article →
            </Link>
          </div>
        </section>
      )}


      {/* BLOG ARTICLES */}
      <section className="blog-list-section">

  <div className="blog-filters">
    <input
      type="text"
      placeholder="Search articles..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    <div className="blog-category-filters">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={
            selectedCategory === category
              ? "active"
              : ""
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  </div>

  <div className="blog-grid">
          {remainingPosts.map((post) => (
            <article className="blog-card" key={post.id}>

              <div className="blog-card-top">
                <span>{post.category}</span>
                <small>{post.date}</small>
              </div>

              <h2>{post.title}</h2>

              <p>{post.excerpt}</p>

              <div className="blog-card-footer">

                <div className="blog-tags">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <Link to={`/blog/${post.id}`}>
                  Read Article →
                </Link>

              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Blog;