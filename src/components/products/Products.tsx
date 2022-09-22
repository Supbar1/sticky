import "../../style.css";
import styled from "styled-components";
import storeItems from "../../services/items.json";
import { ShopItem } from "./ShopItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 60rem) {
    grid-template-columns: 1fr 1fr;
  }
  align-items: center;
  width: min(1310px, 100%);
  padding: 0;
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const PageTitle = styled.h2`
  font-size: var(--fs-primary-heading);
  font-weight: var(--fw-bold);
  margin: 2rem;
  @media (max-width: 60rem) {
    font-size: var(--fs-primary-heading);
    margin: 1rem;
  } ;
`;
export default function Products() {
  return (
    <Container>
      <PageTitle>Products</PageTitle>
      <List>
        {storeItems.map((item) => (
          <ListItem key={item.id}>
            <ShopItem {...item} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
