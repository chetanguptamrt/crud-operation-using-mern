import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./component/navbar";
import Home from "./component/home";
import {Routes, Route} from "react-router-dom";
import Register from "./component/register"
import Edit from "./component/edit"
import Show from "./component/show"
import Search from './component/search';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-user" element={<Register/>}/>
        <Route path="/edit-user/:id" element={<Edit/>}/>
        <Route path="/view-user/:id" element={<Show/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </>
  );
}

export default App;
