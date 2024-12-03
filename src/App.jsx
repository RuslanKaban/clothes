import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Teaser from './components/Teaser';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Products/>
      <Teaser/>
      <Footer/>
    </div>
  );
}

export default App;
