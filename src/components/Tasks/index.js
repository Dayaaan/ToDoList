/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Task from 'src/containers/Tasks/Task';

import './tasks.scss';

/**
 * Code
 */
const Tasks = ({ list }) => (
  <ul id="todo-list">
    {list.map(task => (
      <Task
        key={task.id}
        {...task}
      />
    ))}
  </ul>
);

Tasks.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
/**
 * Export
 */
export default Tasks;
