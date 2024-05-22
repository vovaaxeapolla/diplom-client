import { Route, Routes } from 'react-router-dom'
import './App.sass'
import { Auth } from '@pages'

function App() {

  return (
    <Routes>
      <Route path='/auth/*' element={<Auth />} />
    </Routes>
  )
}

export default App
