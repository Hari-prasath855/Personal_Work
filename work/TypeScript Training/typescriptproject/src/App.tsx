import './App.css';
import { Greet, Person } from './components/Greet';

function App() {
  const personName = {
    firstName :'Bruce',
    lastName : 'wayne'
  }
  return (
    <div className="App">
      <Greet name='Hari'/>
      <Person name={personName}/>
    </div>
  );
} 

export default App;
