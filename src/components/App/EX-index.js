/**
 * NPM import
 */
import React from 'react';
import uuidv4 from 'uuid/v4';

/**
 * Local import
 */
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';

import taskList from 'src/data/tasks';

import './app.scss';

/**
 * Code
 */
class App extends React.Component {
  // State
  state = {
    tasks: taskList,
    input: '',
  };

  /**
   * Actions
   */
  // Form
  addTask = () => {
    console.log('App :: setState avec une tâche');

    // On doit recup les taches du state
    const { tasks, input } = this.state;

    const content = input.trim();

    if (content !== '') {
      // Préparer la nouvelle tâche
      const newTask = {
        id: uuidv4(),
        label: content,
        done: false,
        fav: false,
      };


      // INTERDICTION : ALERTE
      // On ne doit pas modifier le state par nous-même !

      // Préparer la nouvelle liste : ancienne liste + nouvelle tache

      // NOPE : avec push - On modifie le state directement !
      // const newTasks = tasks; // Attention, ça ne copie pas
      // newTasks.push(newTask);

      // OK : concat : On recup un nouveau tableau
      // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/concat
      // const newTasks = tasks.concat(newTask);

      // TOP : classe internationnale
      // avec le spread operator
      const newTasks = [...tasks, newTask];

      // setState de React
      this.setState({
        tasks: newTasks,
        input: '',
      });
    }
  }

  changeInput = (inputValue) => {
    // changer le state via setState
    this.setState({
      input: inputValue,
    });
  }

  // Task
  checkTask = id => () => {
    console.log('Case cochée', id);

    // Recup des tâches
    const { tasks } = this.state;

    // - [x] avoir une copie du tableau de tâches
    // -> identifier la tâche à faire évoluer (changer le done par !done)
    // attention, il nous faut donc une copie de l'objet de la tâche qui doit être modifiée

    // Object.assign() équivalent au Array.concat()

    const newTasks = tasks.map((task) => {
      // J'identifie la tâche à changer
      if (task.id === id) {
        // On créer un nouvel objet (attention à la modif du state)
        return {
          // Je veux tout ce que contient l'objet actuel
          ...task,
          // id: task.id,
          // label: task.label,
          // done: task.done,

          // inverser la valeur de done
          done: !task.done,
        };
      }
      // Je renvoie la tache (objet) non modifié
      // Si l'id ne correspond pas, pas besoin de faire de copie (pas de modif)
      return task;
    });

    // changement de state
    this.setState({
      tasks: newTasks,
    });
  }

  favTask = id => () => {
    console.log('App :: Fav', id);

    // Recup des tâches
    const { tasks } = this.state;

    // Nouveau tableau des tâches
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          fav: !task.fav,
        };
      }
      return task;
    });

    // changement de state
    this.setState({
      tasks: newTasks,
    });
  }

  removeTask = id => () => {
    console.log('App :: Remove', id);
    // Recup les tâches actuelles
    const { tasks } = this.state;

    // filtrer les tâches pour ne conserver que les tâches différentes de l'id courant
    const newTasks = tasks.filter(task => task.id !== id);

    // MaJ du state
    this.setState({
      tasks: newTasks,
    });
  }

  /**
   * Render
   */
  render() {
    // Recup des tâches dans le state
    const { tasks, input } = this.state;

    // Recup du nb de tâches en cours
    const count = tasks.filter(task => !task.done).length;

    // Tâches filtrées
    const filteredTasks = [
      // + En haut, les tâches non effectuées favories
      ...tasks.filter(task => !task.done && task.fav),
      // + Ensuite, les tâches non effectuées non favories
      ...tasks.filter(task => !task.done && !task.fav),
      // + Ensuite, les tâches effectuées
      ...tasks.filter(task => task.done),
    ];

    // On prépare l'objet d'actions
    const actions = {
      onTaskCheck: this.checkTask,
      onTaskFav: this.favTask,
      onTaskRemove: this.removeTask,
    };

    return (
      <div id="todo">
        <Form
          onAddTask={this.addTask}
          onChangeInput={this.changeInput}
          inputValue={input}
        />
        <Counter count={count} />
        <Tasks
          list={filteredTasks}
          actions={actions}
        />
      </div>
    );
  }
}

/**
 * Export
 */
export default App;
