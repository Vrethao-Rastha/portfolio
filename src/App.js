import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import Landing from './Components/Landing'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MetaTags>
        <meta property="og:title" content="Portfolio" />
        <meta property="og:image" content="src/images/apocalypse-483425_1920.jpg" />
        </MetaTags>

        <Landing />
      </div>
    );
  }
}

export default App;
