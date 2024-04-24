import './assets/styles.scss';

export default function Sidebar(): JSX.Element {
  return (
    <nav className="sidebar">
      <div className="sidebar-user">
        <span className="sidebar-user-name">Some User</span>
      </div>
      <div className="sidebar-categories">
        <h4 className="sidebar-categories-header">Categories</h4>
        <ul className="sidebar-categories-list">
          <li>General</li>
          <li>Tech</li>
          <li>Cryptocurrency</li>
        </ul>
        <button>Reset</button>
      </div>
    </nav>
  );
}
