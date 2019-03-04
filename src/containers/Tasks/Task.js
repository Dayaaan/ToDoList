// npm import
import { connect } from 'react-redux';

// Composant
import Task from 'src/components/Tasks/Task';

import { removeTask, checkTask, favTask } from 'src/store/reducer';

// === State (Données) ===
// Je transmets des données du State vers le composant
// si aucune donnée : mapStateToProps = null;
const mapStateToProps = null;

// === Dispatch (Actions) ===
// Je transmets des actions pour agir sur le State vers le composant
// si aucune action : mapDispatchToProps = {};
const mapDispatchToProps = (dispatch, ownProps) => ({
  onTaskCheck: () => {
    dispatch(checkTask(ownProps.id));
  },
  onTaskFav: () => {
    dispatch(favTask(ownProps.id));
  },
  onTaskRemove: () => {
    dispatch(removeTask(ownProps.id));
  },
});

// Container
// connect(Ce que l'on veut)(Qui en a besoin)
const TaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task);

// Export
export default TaskContainer;
