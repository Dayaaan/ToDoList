/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Form from 'src/containers/Form';
import Counter from 'src/containers/Counter';
import Tasks from 'src/containers/Tasks';

import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="todo">
    <Form />
    <Counter />
    <Tasks />
  </div>
);

/**
 * Export
 */
export default App;
