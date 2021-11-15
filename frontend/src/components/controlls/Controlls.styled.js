import styled from 'styled-components';

export const ControllsComponent = styled.div`
  height: 9rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  padding: 1rem 2rem;
  color: white;
  background-color: #262129;
  box-shadow: -1px -6px 6px -7px rgba(255, 255, 255, 0.3);

  .songInfo {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 7rem;
    }

    .songDetails {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;

      .trackName {
        color: #ebe4e4;
        font-size: 1.4rem;
        font-weight: 500;
      }

      .artists {
        font-size: 0.9rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        color: #a39d9d;
      }
    }
  }

  .controller {
    flex: 1.2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    .controlls {
      display: flex;
      align-items: center;
      gap: 3.5rem;

      .play {
        width: 3.5rem;
        height: 3.5rem;
        padding: 0.9rem;
        color: black;
        border: 1px solid white;
        border-radius: 50%;
        background-color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 1.1rem;
      }

      .controllButton {
        cursor: pointer;
        font-size: 1.3rem;
      }
    }

    .timeline {
      display: flex;
      align-items: center;
      gap: 1rem;
      width: clamp(200px, 100%, 400px);

      input {
        border-radius: 1rem;
        width: 100%;
      }
    }
  }

  .features {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .controllButton {
      cursor: pointer;
      font-size: 1.3rem;
    }
  }
`;
