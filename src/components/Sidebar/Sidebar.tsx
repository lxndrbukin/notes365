import './assets/styles.scss';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { GoPlus } from 'react-icons/go';

export default function Sidebar(): JSX.Element {
  return (
    <nav className='sidebar'>
      <div className='sidebar-logo'>notes365</div>
      <div className='sidebar-user'>
        <span className='sidebar-user-name'>
          Some User <BsThreeDotsVertical />
        </span>
      </div>
      <div className='sidebar-categories'>
        <h4 className='sidebar-categories-header'>
          CATEGORIES <GoPlus />
        </h4>
        <ul className='sidebar-categories-list'>
          <li>General</li>
          <li>Tech</li>
          <li>Cryptocurrency</li>
        </ul>
        <button>
          <MdOutlineCleaningServices />
          Reset
        </button>
      </div>
    </nav>
  );
}
