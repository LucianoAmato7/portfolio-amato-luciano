import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TechnologiesBar from './components/TechnologiesBar';
import Title from './components/Title';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path={'/'} element={<Title/>}/>
        </Routes>
        <TechnologiesBar/>
        
      </BrowserRouter>
    
    </div>
  );
}

export default App;
