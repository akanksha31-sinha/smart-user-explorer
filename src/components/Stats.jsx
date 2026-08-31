function Stats({ totalUsers, totalFavorites, showing }) {
  return (
    <div className="stats">
      <div className="stat-card">
        <span>👥</span>
        <div>
          <strong>{totalUsers}</strong>
          <small>Total Users</small>
        </div>
      </div>

      <div className="stat-card">
        <span>⭐</span>
        <div>
          <strong>{totalFavorites}</strong>
          <small>Favorites</small>
        </div>
      </div>

      <div className="stat-card">
        <span>🔎</span>
        <div>
          <strong>{showing}</strong>
          <small>Showing</small>
        </div>
      </div>
    </div>
  );
}

export default Stats;