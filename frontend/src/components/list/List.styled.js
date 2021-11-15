import styled from 'styled-components';

export const ListComponent = styled.div`
  flex: 1;
  height: calc(100vh - 14rem);

  .header {
    padding: 1rem 0rem;
    width: clamp(300px, 100%, 800px);
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      color: #ada7a7;
      font-size: 1.5rem;
      font-weight: bold;

      :nth-child(1) {
        width: 5rem;
      }

      :nth-child(2) {
        flex: 0.77;
      }

      :nth-child(3) {
        flex: 0.3;
      }
    }
  }

  .list {
    padding: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    overflow-y: scroll;
  }
`;
