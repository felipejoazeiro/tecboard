import './styles.css';

function IconList({ items }) {
  return (
    <ul className="icones">
      {items.map((item) => (
        <li key={item.alt} className="options">
          <img src={item.src} alt={item.alt} />
        </li>
      ))}
    </ul>
  );
}

export default IconList;
