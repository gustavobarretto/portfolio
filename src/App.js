import './App.scss';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { About } from './components/About';
import { Tools } from './components/Tools';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Tools />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
