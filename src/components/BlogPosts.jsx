import { useState, useEffect } from "react";
import "./BlogPosts.css";

const categories = [
  { name: "Recent", keywords: [] },
  { name: "DevOps", keywords: ["devops", "jenkins", "docker", "kubernetes", "ci/cd"] },
  { name: "Projects", keywords: ["project", "myce", "lokma", "knocksea"] },
  { name: "Algorithms", keywords: ["algorithm", "백준", "baekjoon", "코딩테스트"] },
  { name: "CS Philosophy", keywords: ["cs", "computer science", "철학", "philosophy"] },
  { name: "Cybersecurity", keywords: ["ransomware", "랜섬웨어", "security"] }
];

export default function BlogPosts() {
  const [activeTab, setActiveTab] = useState("Recent");
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch pre-built blog posts JSON
        const response = await fetch('/blog-posts.json');
        const posts = await response.json();
        setAllPosts(posts);
      } catch (error) {
        console.error("Failed to load blog posts:", error);
        setAllPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filterPosts = () => {
    const activeCategory = categories.find(c => c.name === activeTab);

    if (!activeCategory || activeCategory.keywords.length === 0) {
      return allPosts;
    }

    return allPosts.filter(post => {
      const searchText = `${post.title} ${post.description}`.toLowerCase();
      return activeCategory.keywords.some(keyword =>
        searchText.includes(keyword.toLowerCase())
      );
    });
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\. /g, '.').replace(/\.$/, '');
  };

  const stripHtml = (html) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const filteredPosts = filterPosts();

  return (
    <section id="blog" className="blog-section">
      <h2>Blog</h2>
      <p className="section-subtitle">
        Reflections, experiments, and technical deep dives
      </p>

      <div className="tabs">
        {categories.map(category => (
          <button
            key={category.name}
            className={`tab-button ${activeTab === category.name ? "active" : ""}`}
            onClick={() => setActiveTab(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="loading-text">Loading posts...</p>
      ) : (
        <div className="posts-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.slice(0, 3).map((post, index) => (
              <div key={index} className="post-card">
                <h4>{stripHtml(post.title)}</h4>
                <p className="post-description">{stripHtml(post.description)}</p>
                <small className="post-date">{formatDate(post.pubDate)}</small>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="post-link"
                >
                  → Read on Naver Blog
                </a>
              </div>
            ))
          ) : (
            <p className="no-posts">No posts found in this category</p>
          )}
        </div>
      )}

      <div className="view-all-link">
        <a
          href="https://blog.naver.com/drakor"
          target="_blank"
          rel="noreferrer"
          className="naver-blog-link"
        >
          → View all posts on Naver Blog
        </a>
      </div>
    </section>
  );
}
