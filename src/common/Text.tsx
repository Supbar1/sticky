import styled from "styled-components";

const Heading2 = styled.h2`
  font-size: var(--fs-primary-heading);
  line-height: 1.6;
  font-weight: var(--fw-bold);
  padding-block: var(--size-700);
  margin: 0 1rem;
  @media (max-width: 60em) {
    font-size: var(--fs-800);
    margin: 1rem;
    padding-block: var(--size-400);
    padding-top: 0;
  }
`;
const Heading3 = styled.h3`
  font-size: var(--fs-secondary-heading);
  line-height: 1.6;
  font-weight: var(--fw-bold);
  padding-block: var(--size-700);
  @media (max-width: 60em) {
    font-size: var(--fs-800);
    margin: 1rem;
    padding-block: var(--size-400);
  }
`;
interface TextProps {
  heading2: string;
  heading3: string;
}
const Text = ({ heading2, heading3 }: TextProps) => (
  <>
    {heading2 && <Heading2>{heading2}</Heading2>}
    {heading3 && <Heading3>{heading3}</Heading3>}
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur modi
      eligendi quidem? Accusantium velit delectus necessitatibus blanditiis
      unde? Error illum dolor, est non modi ex debitis cupiditate necessitatibus
      aut voluptatem.
    </p>
  </>
);

export default Text;
