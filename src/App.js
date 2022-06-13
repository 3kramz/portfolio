import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home/Home';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
