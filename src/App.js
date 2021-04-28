import { BrowserRouter as Router, Route } from 'react-router-dom';
import AltaPersona from './Personas/AltaPersona';
import EditarPersona from './Personas/EditarPersona';
import ListadoPersonas from './Personas/ListadoPersonas';


function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={ListadoPersonas} />
        <Route exact path="/personas/editar/:id" component={EditarPersona} />
        <Route exact path="/personas/agregar" component={AltaPersona} />
      </Router>
    </div>
  );
}

export default App;
