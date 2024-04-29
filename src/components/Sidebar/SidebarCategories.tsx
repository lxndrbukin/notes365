import { MdOutlineCleaningServices } from 'react-icons/md';
import { GoPlus } from 'react-icons/go';

export default function SidebarCategories(): JSX.Element {
  return (
    <div className="sidebar-categories">
      <h4 className="sidebar-categories-header">
        CATEGORIES <GoPlus />
      </h4>
      <ul className="sidebar-categories-list">
        <li>General</li>
        <li>Tech</li>
        <li>Cryptocurrency</li>
      </ul>
      <button>
        <MdOutlineCleaningServices />
        Reset
      </button>
    </div>
  );
}
