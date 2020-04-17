import React from 'react';

import Navigator from './routes/homestack'; //implement <Navbar/> in render
import fbaseConfig from './src/fbaseConfig';
fbaseConfig.init();


export default class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Navigator />
    )
  }
}