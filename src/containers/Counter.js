// npm import
import { connect } from 'react-redux';

// Composant
import Counter from 'src/components/Counter';

// === State (Données) ===
// Je transmets des données du State vers le composant
// si aucune donnée : mapStateToProps = null;
const mapStateToProps = state => ({
  count: state.tasks.filter(task => !task.done).length,
});

// === Dispatch (Actions) ===
// Je transmets des actions pour agir sur le State vers le composant
// si aucune action : mapDispatchToProps = {};
const mapDispatchToProps = {};

// Container
// connect(Ce que l'on veut)(Qui en a besoin)
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

// Export
export default CounterContainer;
