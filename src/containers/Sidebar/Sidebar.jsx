import './Sidebar.css';
import data from '../../data/data.json';
import { v4 as uuidv4 } from 'uuid';

let users = [
  { id: uuidv4() },
  { id: uuidv4() },
  { id: uuidv4() },
  { id: uuidv4() },
  { id: uuidv4() },
  { id: uuidv4() },
];

console.log(users);

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <nav>
        <ul>
          {data.map((item) => (
            <li key={uuidv4()}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
