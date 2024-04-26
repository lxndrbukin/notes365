import { NotesListItemProps } from './types';

export default function NotesListItem({
  title,
  text,
  date,
  category,
}: NotesListItemProps): JSX.Element {
  return (
    <li className='notes-list-item'>
      <div className='notes-list-item-top'>
        <span>{category}</span>
        <span>{date}</span>
      </div>
      <h4 className='notes-list-item-title'>{title}</h4>
      <p className='notes-list-item-text'>{text}</p>
    </li>
  );
}
