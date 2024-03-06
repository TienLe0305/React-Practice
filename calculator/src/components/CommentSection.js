import "./CommentSection.css";

const CommentSection = ({ comments }) => {
  return (
    <div className="container">
      <div className="comment-section">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <span className="comment-author">{comment.author}:</span>{" "}
            {comment.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
