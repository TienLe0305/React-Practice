import "./BlogPost.css";

const BlogPost = ({ listBlog }) => {
  return (
    <div className="blog-container">
      {listBlog.map((blog, index) => (
        <div key={index} className="blog-item">
          <img src={blog.image}></img>
          <h1>{blog.title}</h1>
          <span>{blog.date}</span>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
