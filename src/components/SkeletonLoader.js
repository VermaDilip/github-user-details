import './SkeletonLoader.css'; // Import CSS for skeleton loader

const SkeletonLoader = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-avatar"></div>
      <div className="skeleton-line skeleton-title"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line skeleton-short"></div>
    </div>
  );
};

export default SkeletonLoader;
