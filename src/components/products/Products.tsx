import "../../style.css";
import styled from "styled-components";
import storeItems from "../../services/items.json";
import ShopItem from "./ShopItem";

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const List = styled.ul`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 60em) {
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
  @media (max-width: 60em) {
    font-size: var(--fs-primary-heading);
    margin: 1rem;
  } ;
`;
interface ProductsType {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const Products = () => (
  <Container>
    <PageTitle>Products</PageTitle>
    <List>
      {storeItems.map((item: ProductsType) => (
        <ListItem key={item.id}>
          <ShopItem {...item} />
        </ListItem>
      ))}
    </List>
  </Container>
);

export default Products;
