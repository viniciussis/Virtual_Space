import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './elements/Home';
import Menu from './elements/Menu';
import AboutMe from './elements/AboutMe';
import Default from 'elements/Default';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Default/>}>
          <Route index element={<Home />} />
          <Route path='/about-me' element={<AboutMe />} />
        </Route>
        <Route path='*' element={<div>Página não encontrada...</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
