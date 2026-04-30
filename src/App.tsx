import './global.css';

import { Component } from 'react';

import Search from './components/Search';
import Main from './components/Main';
import Result from './components/Result';

class App extends Component {
  render() {
    return (
      <Main>
        <Search />
        <Result />
      </Main>
    );
  }
}

export default App;
