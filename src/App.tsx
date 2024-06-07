import { Navigate, Route, Routes } from 'react-router-dom'
import './App.sass'
import { Auth, Home, Profile, Courses } from '@pages'
import { Header } from '@components'

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/auth/*' element={<Auth />} />
      <Route path='/courses/*' element={<Courses />} />
      <Route path='/profile/*' element={<Profile />} />
      <Route
        path="*"
        element={<Navigate to="/home" replace />}
      />
    </Routes>
    </>
  )
}

export default App
