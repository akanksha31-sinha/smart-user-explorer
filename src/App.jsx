import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import Stats from "./components/Stats";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import LoadingSkeleton from "./components/LoadingSkeleton";


function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("smartUserFavorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("smartUserTheme") === "dark";
  });

  const fetchUsers = () => {
    setLoading(true);
    setError("");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "smartUserTheme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem(
      "smartUserFavorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (userId) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(userId)) {
        return currentFavorites.filter((id) => id !== userId);
      }

      return [...currentFavorites, userId];
    });
  };

  if (loading) {
    return (
      <div className="app">
        <header className="header">
          <h1>🔥 Smart User Explorer</h1>
          <p>Loading users...</p>
        </header>

        <LoadingSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        <div className="error-icon">⚠️</div>

        <h2>Oops! Something went wrong.</h2>

        <p>{error}</p>

        <button onClick={fetchUsers}>
          🔄 Try Again
        </button>
      </div>
    );
  }

  const filteredUsers = users.filter((user) => {
    const search = debouncedSearch.toLowerCase();

    const matchesSearch =
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.company.name.toLowerCase().includes(search);

    const matchesFavorite =
      !showFavoritesOnly || favorites.includes(user.id);

    return matchesSearch && matchesFavorite;
  });

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="header">
  <h1>✨ Smart User Explorer</h1>

  <p>Debounced Search • Dynamic User Cards • Favorites</p>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode((current) => !current)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <Stats
          totalUsers={users.length}
          totalFavorites={favorites.length}
          showing={filteredUsers.length}
        />

        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
        />
        <FilterButtons
          showFavoritesOnly={showFavoritesOnly}
          onShowAll={() => setShowFavoritesOnly(false)}
          onShowFavorites={() => setShowFavoritesOnly(true)}
          totalUsers={users.length}
          totalFavorites={favorites.length}
        />

      </header>


      <main className="user-grid">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h2>No users found</h2>
            <p>
              We couldn't find any users matching "{debouncedSearch}".
            </p>
            <p>
              Try searching with a different name, email, or company.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;