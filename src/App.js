import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Technologies from './components/Technologies';
import Title from './components/Title';

function App() {
  
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path={'/'} element={<Title/>}/>
        </Routes>
        <Technologies/>
        
      </BrowserRouter>
    
    </div>
  );
}

export default App;
