import './App.css';
import Home from './pages/home/Home';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Lyric from './pages/lyric/Lyric';

function App() {
  
  return (
      <GlobalProvider>
        <div className='app-container'>
          <BrowserRouter>
            <Routes>
                <Route path="/"  element={ <Home /> } />
                <Route path="/lyric/track/:id" element={ <Lyric /> } />
            </Routes>
          </BrowserRouter>
        </div>
      </GlobalProvider>
  );
}

export default App;
