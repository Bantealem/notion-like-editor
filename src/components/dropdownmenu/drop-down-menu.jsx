import { RxText } from 'react-icons/rx';

const typeBlocks = [
  {
    id: 1,
    tittle: 'Heading 1',
    shortcut: 'Shortcut: type # + space',
  },
  {
    id: 2,
    tittle: 'expendable Heading 1',
    shortcut: 'Shortcut: type >># + space',
  },
];

const DropDownMenu = () => (
  <div id="add-block">
    <h2 className="add-block-title">Add blocks</h2>
    <p className="add-block-description">Keep typing to filter, or scape to exit</p>
    <ul className="add-block-ul">
      {typeBlocks.map((option) => (
        <li key={option.id} className="container-flex">
          <RxText className="headers-icon" />
          <div className="add-block-li-information container-flex">
            <p className="li-information-title">{option.tittle}</p>
            <p className="li-information-shortcut">{option.shortcut}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default DropDownMenu;
