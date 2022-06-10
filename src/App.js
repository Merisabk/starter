import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AllTodos from './Components/AllTodos';
import TodoForm from './Components/TodoForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>


function App() {
  return (
   
    <Router>
        <Header />
        <Routes>
       <Route path= "/form" element={<TodoForm />} />
       
      </Routes>
      <AllTodos />
      <Footer />

      
    </Router>
  );
  
}

export default App;
