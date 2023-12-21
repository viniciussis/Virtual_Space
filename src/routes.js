import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu';
import AboutMe from './pages/AboutMe';
import Default from 'components/Default';
import Post from 'pages/Post';
import NotFound from 'pages/NotFound';
import ScrollToTop from 'components/ScrollToTop';

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu />
      <Routes>
        <Route path='/' element={<Default />}>
          <Route index element={<Home />} />
          <Route path='about-me' element={<AboutMe />} />
        </Route>
        <Route path='articles/:id' element={<Post />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
