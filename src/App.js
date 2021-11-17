import './App.scss';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { About } from './components/About';
import { Tools } from './components/Tools';
import { Portfolio } from './components/Portfolio';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Tools />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
