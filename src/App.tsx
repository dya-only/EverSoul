import { Route, Routes } from 'react-router-dom'
import './App.css'

import Main from './views/Main'
import Intro from './views/Intro'

function App() {

  return (
    <Routes>
      <Route path="/ko" element={<Main />} />
      <Route path="/intro" element={<Intro />} />
    </Routes>
  )
}

export default App