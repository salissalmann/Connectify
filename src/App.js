import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesStates from './context/NotesStates';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddPost from './components/AddPost';
import Dashboard from './components/Dashboard';

function App() {

  return (
  <NotesStates>
    <div className="App">
        <BrowserRouter>
          <Routes>          
            <Route path="/" element={<Login/>} />
            <Route path="/VeteranDashboard" element={<Dashboard/>} />
            <Route path="/About" element={<AddPost/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/SignUp" element={<SignUp/>} />
          </Routes>
      </BrowserRouter>
    </div>
  </NotesStates>
  );
}

export default App;
