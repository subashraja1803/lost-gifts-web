import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouteSwitch from './pages/base';

function App() {
  return (
    <BrowserRouter>
      <RouteSwitch />
    </BrowserRouter>
  );
}

export default App;
