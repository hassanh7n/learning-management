
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './pages/navbar/Navbar';



function App() {
  // const {user} = useSelector((store) => store.user);
  // console.log(user);
  
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
