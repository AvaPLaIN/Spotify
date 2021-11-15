import styled from 'styled-components';

export const ListItemComponent = styled.div`
  width: clamp(300px, 100%, 800px);
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  cursor: pointer;

  img {
    width: 5rem;
  }

  .songDetails {
    flex: 0.8;
    //width: clamp(200px, 40%, 400px);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #e0dcdc;

    .trackName {
      font-size: 1.7rem;
    }

    .artists {
      display: flex;
      gap: 1rem;
      color: #a39d9d;
    }
  }

  .albumName {
    flex: 0.3;
    color: #a39d9d;
  }

  .duration {
    color: #a39d9d;
  }
`;
