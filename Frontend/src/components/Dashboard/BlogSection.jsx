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
      image: "../../../public/Blogs/download3.jpg",
      link: "https://timesofindia.indiatimes.com/astrology/zodiacs-astrology/discover-your-guardian-angel-based-on-your-zodiac-sign/articleshow/112225477.cms", // Replace with actual image URL later
    },
    {
      id: 2,
      title: "5 Zodiac Signs That Get Annoyed Easily by Others",
      author: "Priyanka Kumari",
      date: "March 24, 2025",
      views: "26270",
      image: "../../../public/Blogs/download2.jpg",
      link: "https://timesofindia.indiatimes.com/astrology/zodiacs-astrology/zodiac-signs-who-get-easily-bothered/articleshow/109399068.cms", // Replace with actual image URL later
    },
    {
      id: 3,
      title: "8 Zodiac Signs That Never Give Up on Their Dreams",
      author: "Astrologer Ankush",
      date: "March 24, 2025",
      views: "23054",
      image: "../../../public/Blogs/download4.jpg", // Replace with actual image URL later
      link: "https://timesofindia.indiatimes.com/astrology/zodiacs-astrology/zodiac-signs-that-never-give-up-who-pursues-dreams-the-hardest/articleshow/116628235.cms",
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
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-title"
              >
                {blog.title}
              </a>

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
