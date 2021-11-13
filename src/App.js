import './App.scss';

import { Banner } from './components/Banner';
import { About } from './components/About'
import { LangTools } from './components/LangTools';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';



function App() {
  return (
    <>  
      <div className="containter">
        <section className="banner">
            <Banner />   
        </section>
        <section className="about"> 
            <About />
        {/* </section>
        <section className="langtools">
            <LangTools />
        </section>
        <section className="projects">
            <Projects />
        </section>
        <section className="contact">
              <Contact /> */}
        </section>
      </div>
    </>
  );
}

export default App;
