import "./Avatar.css";

const Avatar = ({ imageUrl }) => {
  return (
    <div className="avatar">
      <img src={imageUrl} alt="Avatar" />
    </div>
  );
};

export default Avatar;
