import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './elements/Home';
import Menu from './elements/Menu';
import AboutMe from './elements/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<div>Página não encontrada...</div>} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
