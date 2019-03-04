// npm import
import { connect } from 'react-redux';

// Composant
import Form from 'src/components/Form';

// Action creators
import { changeInput, addTask } from 'src/store/reducer';

// === State (Données) ===
// Je transmets des données du State vers le composant
// si aucune donnée : mapStateToProps = null;
const mapStateToProps = state => ({
  inputValue: state.input,
});

// === Dispatch (Actions) ===
// Je transmets des actions pour agir sur le State vers le composant
// si aucune action : mapDispatchToProps = {};
const mapDispatchToProps = dispatch => ({
  onAddTask: () => {
    // console.log('mapDispatchToProps prépare : onAddTask');
    console.log('ADD_TASK : dispatch()');
    dispatch(addTask());
  },
  onChangeInput: (value) => {
    // console.log('mapDispatchToProps prépare : onChangeInput');
    dispatch(changeInput(value));
  },
});

// Container
// connect(Ce que l'on veut)(Qui en a besoin)
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

// Export
export default FormContainer;
