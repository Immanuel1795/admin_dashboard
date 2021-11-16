import './App.css';
import Chart from './Components/Chart';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';




function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
        <Sidebar />
        </div>

        <div className="col-lg-8">
        <Dashboard />
        <Chart />
        </div>
      </div>
     
     
    </div>
  );
}

export default App;
