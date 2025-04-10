import React from "react";
import "../../styles/Dashboard-style/BlogSection.css";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Find Your Guardian Angel According to Your Zodiac Sign",
      author: "Astrologer Aakanksha",
      date: "March 25, 2025",
      views: "92172",
      image: "../../../public/Blogs/download3.jpg", // Replace with actual image URL later
    },
    {
      id: 2,
      title: "5 Zodiac Signs That Get Annoyed Easily by Others",
      author: "Priyanka Kumari",
      date: "March 24, 2025",
      views: "26270",
      image: "../../../public/Blogs/download2.jpg", // Replace with actual image URL later
    },
    {
      id: 3,
      title: "8 Zodiac Signs That Never Give Up on Their Dreams",
      author: "Astrologer Ankush",
      date: "March 24, 2025",
      views: "23054",
      image: "../../../public/Blogs/download4.jpg", // Replace with actual image URL later
    },
  ];

  return (
    <section id="blog" className="blog-section">
      <h2 className="blog-heading">LATEST FROM BLOG</h2>
      <p className="blog-subheading">
        Top Astrologers. 24*7 customer support. Happy to help.
      </p>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-author">{blog.author}</p>
              <p className="blog-date">{blog.date}</p>
              <p className="blog-views">{`${blog.views} views`}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
