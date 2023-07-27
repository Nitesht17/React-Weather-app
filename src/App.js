import logo from './logo.svg';
import './App.css';
import Weather from './components/currentLocation';


function App() {
  return (
    <>
      <div className="container">
        <Weather />
      </div>
      <div className="footer-info">
       
        | Developed by{" "}
        <a target="_blank" href="/">
          Nitesh Tiwari
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="/">
          REACT JS
        </a>
      </div>
    </>
  );
}

export default App;
