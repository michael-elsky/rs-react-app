import './global.css';

import { Component } from 'react';

import Search from './components/Search';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Main>
        <Search />
      </Main>
    );
  }
}

export default App;
