import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/"
import Tasks from "./components/Tasks/"
import About from "./components/About/"
import Footer from "./components/Footer/"

function App() {
  return (
    <div className="App">
      <Header />
      <Tasks />
      <About />
      <Footer />
    </div>
  );
}

export default App;
