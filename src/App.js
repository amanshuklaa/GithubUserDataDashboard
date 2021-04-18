import './App.css';
import DisplayTable from './components/DisplayTable';
import GitUserCard from './components/GitUserCard';
import Profile from "./components/Profile"
import logo from "./logo.jpg"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
     <Profile />
     <GitUserCard />
    </div>
  );
}

export default App;
