import { Navigate, Routes as RoutesGroup, Route, useLocation } from 'react-router-dom'
import App from "../App";
import { Login } from "../pages/Login";
import { AnimatePresence } from 'framer-motion'
import { useAuthStore } from '../store/auth';
import { Characters } from '../pages/Characters';
import { Character } from '../pages/Character';

export function AnimatedRoutes() {
  const { auth } = useAuthStore()
  const location = useLocation()

  const renderBasedOnAuthStatus = (Element?: JSX.Element) => {
    if (!Element) return auth ? <App /> : <Login />

    return auth ? Element : <Navigate to={'/'} />
  }

  return (
    <AnimatePresence mode='wait'>
      <RoutesGroup location={location} key={location.pathname}>
        <Route path='/' element={renderBasedOnAuthStatus()} />
        <Route path='/characters' element={renderBasedOnAuthStatus(<Characters />)}/>
        <Route path='/character/:id' element={renderBasedOnAuthStatus(<Character />)}/>
        <Route path='*' element={renderBasedOnAuthStatus(<Navigate to={'/'} />)} />
      </RoutesGroup>
    </AnimatePresence>
  )
}