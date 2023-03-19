import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, LandingPage, Thanks } from './pages'
function App() {

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
