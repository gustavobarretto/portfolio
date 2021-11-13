import './App.scss';
import { NavPortfolio } from './components/NavPortfolio';
import { Banner } from './components/Banner';
import { About } from './components/About'
import { LangTools } from './components/LangTools';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <section className="home">
            <Banner />
            <NavPortfolio />
          </section>
        </div>
        <div className="row">
          <section className="about">
            <About />
          </section>
        </div>
        <div className="row">
          <section className="tools">
            <LangTools />
          </section>
        </div>
        <div className="row">
          <section className="projects">
            <Projects />
          </section>
        </div>
        <div className="row">
            <section className="contact">
              <Contact />
            </section>
        </div>
      </div>
    </>
  );
}

export default App;
