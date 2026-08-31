function FilterButtons({
  showFavoritesOnly,
  onShowAll,
  onShowFavorites,
  totalUsers,
  totalFavorites,
}) {
  return (
    <div className="filter-buttons">
      <button
        className={!showFavoritesOnly ? "active" : ""}
        onClick={onShowAll}
      >
        👥 All Users ({totalUsers})
      </button>

      <button
        className={showFavoritesOnly ? "active" : ""}
        onClick={onShowFavorites}
      >
        ⭐ Favorites ({totalFavorites})
      </button>
    </div>
  );
}

export default FilterButtons;