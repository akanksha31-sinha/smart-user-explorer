function LoadingSkeleton() {
  return (
    <div className="user-grid">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className="skeleton-card" key={item}>
          <div className="skeleton-avatar"></div>

          <div className="skeleton-line skeleton-title"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-button"></div>
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;