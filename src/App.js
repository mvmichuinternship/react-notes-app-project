import logo from './logo.svg';
import './App.css';
import PageLayout from './screens/PageLayout';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App bg-rose-100">
      <Topbar/>
      <PageLayout/>
    </div>
  );
}

export default App;
