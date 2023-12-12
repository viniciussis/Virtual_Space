import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './elements/Menu';
import AboutMe from './pages/AboutMe';
import Default from 'elements/Default';
import Post from 'pages/Post';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Default />}>
          <Route index element={<Home />} />
          <Route path='about-me' element={<AboutMe />} />
          <Route path='articles/:id' element={<Post />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
