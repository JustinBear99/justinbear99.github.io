import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Particle from './components/Particle';


function App() {
  return (
    <Router basename={'/'}>
      <div className="App">
        <Particle/>
        <div className="bg-white opacity-90 absolute mt-0 ml-0 w-full h-full overflow-auto dark:bg-gray-500">
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/resume' element={<Resume/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
