import Home from './components/Home'
import Home2 from './components/Home2';
import Add from './components/Add'
import Edit from './components/Edit'
import Log from './components/Log'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Home/>
    <div className='container'>
      <Router>
          <Routes>
            <Route path= "/" element = {<Log/>}></Route>
            <Route path = "/home/:id" element = {<Home2/>} /> 
            <Route path = "/add" element = {<Add/>} />  
            <Route path = "/edit/:id" element = {<Edit/>} /> 
        </Routes>
      </Router>
    </div>
    
    </>
  );
}

export default App;
