import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import CountryDetails from './components/CountryDetails.js';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div class="container mt-3 ">
      <Navbar />
      <div>
        <Route path="/country/:code" component={CountryDetails} />
      </div>
    </div>
  );
}

export default App;
