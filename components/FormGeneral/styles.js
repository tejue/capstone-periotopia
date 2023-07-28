import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    gap: 30px;
    padding: 30px;
  }
`;
