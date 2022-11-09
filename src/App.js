import './App.css';
import Home from './pages/home/Home';
import { GlobalProvider } from './context/GlobalState';

function App() {
  
  return (
      <GlobalProvider>
        <div className='app-container'>
            <Home />
        </div>
      </GlobalProvider>
  );
}

export default App;
