function UserCard({ user, isFavorite, onToggleFavorite }) {
  return (
    <div className={`user-card ${isFavorite ? "is-favorite" : ""}`}>
      <div className="avatar">
        {user.name.charAt(0)}
      </div>

      <h2>{user.name}</h2>

      <p>
        <strong>✉ Email:</strong>{" "}
        <a href={`mailto:${user.email}`}>
          {user.email}
        </a>
      </p>

      <p>
        <strong>Company:</strong> {user.company.name}
      </p>

      <p>
        <strong>📍 City:</strong> {user.address.city}
      </p>

      <button onClick={() => onToggleFavorite(user.id)}>
        {isFavorite ? "★ Favorited" : "☆ Favorite"}
      </button>
    </div>
  );
}

export default UserCard;