import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Routes
} from 'react-router-dom';
import './App.css';
import Sticky from './components/header/banner';
import First from './components/sections/first';
import Playlists from './components/sections/playlist';
import One from './components/mainpage';

function App() {
  return (
    <>
   <Router>
      <Routes>
      <Route path='/' element={<One />} exact />
      <Route path='/2' element={<Playlists />} exact />
      </Routes>
    </Router>
    </>
  );
}

export default App;
