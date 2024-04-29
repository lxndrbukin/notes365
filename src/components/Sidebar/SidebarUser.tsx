import { BsThreeDotsVertical } from 'react-icons/bs';

export default function SidebarUser(): JSX.Element {
  return (
    <div className="sidebar-user">
      <span className="sidebar-user-name">
        Some User <BsThreeDotsVertical />
      </span>
    </div>
  );
}
