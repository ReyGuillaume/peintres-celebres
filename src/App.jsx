import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Artist from './pages/Artist/Artist'
import NotFound from './pages/NotFound'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="artiste" element={<Artist />}>
            <Route index element={<Artist />} />
            <Route path=":artistId" element={<Artist />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
