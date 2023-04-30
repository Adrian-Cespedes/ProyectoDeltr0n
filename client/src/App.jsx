import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {Deltr0nPage} from './pages/Deltr0nPage'
import {Deltr0nFormPage} from './pages/Deltr0nFormPage'
import {Navigation} from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
    <Navigation/>

      <Routes>
        <Route path='/' element={<Navigate to="/inicio"/>} />
        <Route path='/inicio' element={<Deltr0nPage/>} />
        <Route path='/busqueda' element={<Deltr0nFormPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App