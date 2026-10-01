import { Link, useParams } from "react-router-dom";
import blogPosts from "../data/blog";

function BlogDetails() {
  const { postId } = useParams();

  const post = blogPosts.find((item) => item.id === postId);

  if (!post) {
    return (
      <main className="blog-not-found">
        <p className="section-label">BLOG</p>
        <h1>Article Not Found</h1>
        <Link to="/blog" className="primary-button">
          Back to Blog
        </Link>
      </main>
    );
  }

  const relatedPosts = blogPosts.filter(
    (item) => item.id !== post.id && item.category === post.category
  );

  return (
    <main className="blog-details-page">
      <section className="blog-details-hero">
        <p className="section-label">{post.category}</p>

        <h1>{post.title}</h1>

        <div className="blog-details-meta">
          <span>{post.date}</span>
          <span>Riyadvi Insights</span>
        </div>
      </section>

      <section className="blog-details-content">
        <div className="blog-article">
          <p>{post.content}</p>

          <p>
            At Riyadvi Software Technologies, technology, design, and business
            understanding come together to create meaningful digital
            experiences.
          </p>

          <p>
            The right digital solution should not only look good but also
            support usability, scalability, performance, and long-term business
            objectives.
          </p>
        </div>

        <aside className="blog-details-sidebar">
          <p className="section-label">TAGS</p>

          <div className="blog-detail-tags">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <Link to="/contact" className="primary-button">
            Discuss Your Project
          </Link>
        </aside>
      </section>

      {relatedPosts.length > 0 && (
        <section className="related-blog-section">
          <p className="section-label">RELATED ARTICLES</p>

          <div className="related-blog-grid">
            {relatedPosts.map((related) => (
              <Link
                to={`/blog/${related.id}`}
                className="related-blog-card"
                key={related.id}
              >
                <span>{related.category}</span>
                <h3>{related.title}</h3>
                <p>{related.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default BlogDetails;