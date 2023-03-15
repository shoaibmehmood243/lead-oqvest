import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/common';
import { Home, Purchase, Refinance } from './pages'
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/refinance' element={<Refinance />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
