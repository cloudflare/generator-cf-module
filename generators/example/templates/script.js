import React from 'react';
import {render} from 'react-dom';

import Component from '../src/index';

class Application extends React.Component {
  render() {
    return (
      <div>
        <h1><%- description %> Example</h1>
        <Component/>
      </div>
    );
  }
}

render(<Application/>, document.getElementById('root'));
