import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import GLTFViewer from './components/GLTFViewer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        {/* Flex container to hold About and GLTFViewer side by side */}
        <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
          <div style={{ flex: '1', padding: '20px' }}>
            <About />
          </div>
          <div style={{ flex: '1', padding: '20px' }}>
            <GLTFViewer />
          </div>
        </div>

        {/* Other sections */}
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
