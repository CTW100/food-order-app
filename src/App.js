import react, { Fragment } from 'react';

import Navigation from './components/Header/Navigation';
import Introduction from './components/Intro/Introduction';
import FoodList from './components/Main/FoodList';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Introduction />
      <FoodList />
    </Fragment>
  );
}

export default App;
