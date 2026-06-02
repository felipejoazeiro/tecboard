import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuList = styled.ul`
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;

  p {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0;
  }
`;

function Menu({ items }) {
  return (
    <MenuList>
      {items.map((item) => (
        <Link key={item} to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
          <MenuItem>
            <p>{item}</p>
          </MenuItem>
        </Link>
      ))}
    </MenuList>
  );
}

export default Menu;
