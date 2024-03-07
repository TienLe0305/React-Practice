import "./UserProfile.css";

const UserProfile = ({ userObject }) => {
  return (
    <div className="user-profile">
      <img
        src={userObject.avatarUrl}
        alt={userObject.name}
        className="avatar"
      />
      <div className="user-info">
        <h2>{userObject.name}</h2>
        <p>{userObject.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
