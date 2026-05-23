import './styles.css';

function Menu({ items }) {
  return (
    <ul className="menu">
      {items.map((item) => (
        <li key={item} className="options">
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
