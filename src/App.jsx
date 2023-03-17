import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/common';
import { Home, LandingPage, Thanks } from './pages'
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/lead' element={<Home />} />
        <Route path='/thank-you' element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
