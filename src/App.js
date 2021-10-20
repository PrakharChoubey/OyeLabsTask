import './App.css';
import Entries from './Components/Entries';
import { EntriesCTXP } from './Components/EntriesCTX';
import { AddEntry } from './Components/AddEntry';

function App() {
  return (
    <div className="App">
      <header>
        <span className="logo">FE Task</span>
        <span id="tasktab">task</span>
      </header>
      <div className="content">
        <EntriesCTXP>
          
          <Entries />
        </EntriesCTXP>
      </div>
    </div>
  );
}

export default App;
