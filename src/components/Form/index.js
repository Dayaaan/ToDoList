/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './form.scss';


/**
 * Code
 */
class Form extends React.Component {
  static propTypes = {
    // Action : ajout de tâche
    onAddTask: PropTypes.func.isRequired,
    // action et une valeur : gestion du champ
    onChangeInput: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    // Un moyen pour agir sur le state ?
    const { onAddTask, inputValue } = this.props;
    // j'appelle la fonction
    if (inputValue.trim() !== '') {
      onAddTask();
    }
  }

  handleChange = (evt) => {
    // Je recup la valeur du champ
    const { value } = evt.target;
    // Je recup la fonction a exécuter
    const { onChangeInput } = this.props;

    onChangeInput(value);
  }

  render() {
    // Je récup les props dont j'ai besoin
    const { inputValue } = this.props;

    return (
      <form id="todo-form" onSubmit={this.handleSubmit}>
        <input
          id="todo-input"
          placeholder="Ajouter une tâche"
          type="text"
          autoComplete="off"
          value={inputValue}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}


// On peut les définir après la classe
// Form.propTypes = {
//   onAddTask: PropTypes.func.isRequired,
// };

// Solution parfaitement viable mais légerement optimisable
// const Form = ({ onAddTask }) => {
//   console.log('Rendu');

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log('Submit');
//     // Un moyen pour agir sur le state ?
//     onAddTask();
//   };

//   return (
//     <form id="todo-form" onSubmit={handleSubmit}>
//       <input
//         id="todo-input"
//         placeholder="Ajouter une tâche"
//         type="text"
//         autoComplete="off"
//       />
//     </form>
//   );
// };

// Form.propTypes = {
//   onAddTask: PropTypes.func.isRequired,
// };

/**
 * Export
 */
export default Form;
