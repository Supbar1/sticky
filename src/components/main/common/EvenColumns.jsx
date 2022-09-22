import styled from "styled-components";

const EvenColumnsStyled = styled.div`
   padding-block: var(--size-900);
  font-size: var(--fs-body);
  display: grid;
  gap: 5vw;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  @media (max-width: 60em) {
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
  }
`;

const EvenColumns = ({children}) => {
    return ( 
        <EvenColumnsStyled>
            {children}
        </EvenColumnsStyled>
     );
}
 
export default EvenColumns;