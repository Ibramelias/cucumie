import './App.css';
import Home from './pages/home/Home';
import Nav from './components/nav/nav';
// import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className='mainPage'>
      <Home />
      <Nav />
    </div>
  );
}

export default App;
