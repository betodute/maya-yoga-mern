import './App.css';
import { Header } from './Header.js';
import { Schedule } from './Schedule.js';
import { Footer } from './Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Header />
          <Schedule />
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
