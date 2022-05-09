import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard FirstName="Jane" LastName="Doe" Age="45" HairColor="Black"/>
        <PersonCard FirstName="John" LastName="Smith" Age="88" HairColor="Brown"/>
        <PersonCard FirstName="Millard" LastName="Fillmore" Age="50" HairColor="Brown"/>
        <PersonCard FirstName="Maria" LastName="Smith" Age="62" HairColor="Brown"/>
    </div>
  );
}

export default App;
