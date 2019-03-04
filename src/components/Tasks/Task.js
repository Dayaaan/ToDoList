/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaTrash, FaStar, FaRegStar } from 'react-icons/fa';

/**
 * Local import
 */


/**
 * Code
 */
const Task = ({
  fav,
  done,
  label,
  onTaskCheck,
  onTaskFav,
  onTaskRemove,
}) => {
  // Je prépare le composant à appeller
  const Favorite = fav ? FaStar : FaRegStar;

  return (
    // Au lieu de se prendre la tete avec : done ? 'task task--done' : 'task'
    <li className={classNames(
      'task',
      { 'task--fav': fav },
      { 'task--done': done },
    )}
    >
      <input
        type="checkbox"
        checked={done}
        onChange={onTaskCheck}
      />
      <span className="task-label">{label}</span>
      <FaTrash className="task-trash" onClick={onTaskRemove} />
      <Favorite className="task-fav" onClick={onTaskFav} />
    </li>
  );
};

Task.propTypes = {
  fav: PropTypes.bool.isRequired,
  done: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onTaskCheck: PropTypes.func.isRequired,
  onTaskFav: PropTypes.func.isRequired,
  onTaskRemove: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Task;
