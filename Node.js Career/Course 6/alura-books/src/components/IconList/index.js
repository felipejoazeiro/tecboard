import styled from 'styled-components';

const IconListContainer = styled.ul`
  display: flex;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const IconItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;

function IconList({ items }) {
  return (
    <IconListContainer>
      {items.map((item) => (
        <IconItem key={item.alt}>
          <IconImage src={item.src} alt={item.alt} />
        </IconItem>
      ))}
    </IconListContainer>
  );
}

export default IconList;
