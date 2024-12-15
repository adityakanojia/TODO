import './App.css';
import CreateTask from './components/CreateTask';
import DeleteTask from './components/DeleteTask';
import Edittask from './components/Edittask';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/create-task' element={<CreateTask/>}/>
      <Route path='/tasks/edit/:id' element={<Edittask/>}/>
      <Route path='/tasks/delete/:id' element={<DeleteTask/>}/>
    </Routes>
  );
}

export default App;
