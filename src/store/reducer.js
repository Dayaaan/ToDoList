/**
 * Import
 */
import uuidv4 from 'uuid/v4';

import taskList from 'src/data/tasks';

/**
 * Initial State
 */
const initialState = {
  tasks: taskList,
  input: '',
};

/**
 * Types
 */
const CHANGE_INPUT = 'CHANGE_INPUT';
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const CHECK_TASK = 'CHECK_TASK';
const FAV_TASK = 'FAV_TASK';


// Retourne un nouveau tableau
const toggleValue = (data, id, key) => data.map((item) => {
  // si l'id et l'id de l'item sont identique
  if (item.id === id) {
    // Création d'une copie de l'item
    return {
      // je déverse le contenu de l'item
      ...item,
      // j'utilise la clé transmise pour altérer l'objet
      [key]: !item[key],
    };
  }
  // si l'id et l'id de l'item sont différents
  // Je retourne l'item sans le modifier
  return item;
});


/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.value,
      };

    case REMOVE_TASK: {
      // filter pour enlever la tâche ciblée
      const newTasks = state.tasks.filter(task => task.id !== action.id);

      return {
        ...state,
        tasks: newTasks,
      };
    }

    case CHECK_TASK:
      return {
        ...state,
        tasks: toggleValue(state.tasks, action.id, 'done'),
      };

      // case FAV_TASK: {
      //   const newTasks = state.tasks.map((task) => {
      //     if (task.id === action.id) {
      //       return {
      //         ...task,
      //         fav: !task.fav,
      //       };
      //     }
      //     return task;
      //   });


      //   return {
      //     ...state,
      //     tasks: newTasks,
      //   };
      // }

    case FAV_TASK:
      return {
        ...state,
        tasks: toggleValue(state.tasks, action.id, 'fav'),
      };

    case ADD_TASK: {
      // Création de la nouvelle tâche
      const newTask = {
        id: uuidv4(),
        label: state.input.trim(),
        done: false,
        fav: false,
      };

      // Création du nouveau tableau de tâches
      const newTasks = [...state.tasks, newTask];

      // Nouveau state avec les taches et le champ vidé
      return {
        ...state,
        tasks: newTasks,
        input: '',
      };
    }

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const changeInput = value => ({
  type: CHANGE_INPUT,
  value,
});

export const addTask = () => ({
  type: ADD_TASK,
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id,
});

export const checkTask = id => ({
  type: CHECK_TASK,
  id,
});

export const favTask = id => ({
  type: FAV_TASK,
  id,
});

/**
 * Selectors
 */
export const getFilteredTasks = tasks => (
  [
    // + En haut, les tâches non effectuées favories
    ...tasks.filter(task => !task.done && task.fav),
    // + Ensuite, les tâches non effectuées non favories
    ...tasks.filter(task => !task.done && !task.fav),
    // + Ensuite, les tâches effectuées
    ...tasks.filter(task => task.done),
  ]
);

/**
 * Export
 */
export default reducer;
