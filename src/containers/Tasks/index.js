// npm import
import { connect } from 'react-redux';

// Composant
import Tasks from 'src/components/Tasks';

import { getFilteredTasks } from 'src/store/reducer';

// === State (Données) ===
// Je transmets des données du State vers le composant
// si aucune donnée : mapStateToProps = null;
const mapStateToProps = state => ({
  list: getFilteredTasks(state.tasks),
});

// === Dispatch (Actions) ===
// Je transmets des actions pour agir sur le State vers le composant
// si aucune action : mapDispatchToProps = {};
const mapDispatchToProps = {};

// Container
// connect(Ce que l'on veut)(Qui en a besoin)
const TasksContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tasks);

// Export
export default TasksContainer;
