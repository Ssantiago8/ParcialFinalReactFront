import Home from './components/Home'
import Home2 from './components/Home2';
import Add from './components/Add'
import Edit from './components/Edit'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Home/>
    <Router>
        <Routes>
          <Route path = "/" element = {<Home2/>} /> 
          <Route path = "/add" element = {<Add/>} />  
          <Route path = "/edit" element = {<Edit/>} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
