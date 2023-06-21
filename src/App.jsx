import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, LandingPage, Thanks } from './pages';
import userway from './userway';
import { initializeFacebookPixel } from './meta';

function App() {
  useEffect(()=> {
    initializeFacebookPixel();
    userway?.start()
    setTimeout(() => {
      const iconElement = document.querySelector('#userwayAccessibilityIcon');
      if (iconElement) {
        iconElement.setAttribute('style', 'background-color: rgb(34, 45, 57) !important;');
      }
    }, 2000);
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/lead' element={<Home />} />
        <Route path='/thank-you' element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
