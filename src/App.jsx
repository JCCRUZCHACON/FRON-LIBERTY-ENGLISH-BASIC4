import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import HomeHouseSection from './components/HomeHouseSection';
import FatherSection from './components/FatherSection';

function App() {
  return (
    <div>
      <div className="bg-slate-950 min-h-screen text-white relative selection:bg-indigo-500 selection:text-white">
        
        {/* Barra de navegación modular */}
        <Navbar />

        {/* Sistema de Rutas */}
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/house" element={<HomeHouseSection />} />
          <Route path="/father" element={<FatherSection />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;