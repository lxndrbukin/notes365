import './assets/styles.scss';
import SidebarUser from './SidebarUser';
import SidebarCategories from './SidebarCategories';

export default function Sidebar(): JSX.Element {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">notes365</div>
      <SidebarUser />
      <SidebarCategories />
    </nav>
  );
}
