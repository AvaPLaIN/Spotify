//! IMPORTS
//     ? IMPORT REACT

//     ? IMPORT REDUX

//     ? IMPORT LIBRARIES

//     ? IMPORT API

//     ? IMPORT HOOKS

//     ? IMPORT PAGES

//     ? IMPORT COMPONENTS
import { HomeComponent } from './Home.styled';
import Searchbar from '../../components/searchbar/Searchbar';
import List from '../../components/list/List';
import Player from '../../components/player/Player';
import Controlls from '../../components/controlls/Controlls';

//     ? IMPORT UTILS

const Home = () => {
  return (
    <HomeComponent>
      <Searchbar />
      <List />
      {/* <Player /> */}
      <Controlls />
    </HomeComponent>
  );
};

export default Home;
