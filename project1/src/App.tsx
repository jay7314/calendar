import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigator from './Menu/Navigator';
import Main from './Menu/Main';
import Calendar from './Menu/Calendar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigator/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Calendar' element={<Calendar/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
