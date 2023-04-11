import './App.css';
import { Todolist } from './pages/main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Todolist />
    </div>
  );
}

export default App;
