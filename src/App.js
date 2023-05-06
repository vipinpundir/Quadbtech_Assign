import './App.css';
import DataApi from './DataApi';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-dark-subtle'>
    <Navbar></Navbar>
    <DataApi></DataApi>
      
    </div>
  );
}

export default App;
