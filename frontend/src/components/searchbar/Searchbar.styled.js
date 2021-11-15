import styled from 'styled-components';

export const SearchbarComponent = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: clamp(250px, 100%, 600px);
    height: 100%;

    input {
      height: 100%;
      width: 100%;
      border: none;
      border-radius: 5rem;
      padding: 1rem 1rem 1rem 3rem;
    }
  }
`;
