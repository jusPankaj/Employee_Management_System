import { useEffect } from 'react'
import './App.css'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard' 
import Login from './components/Auth/Login'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

function App() {

  useEffect(()=>{
    // setLocalStorage();
    getLocalStorage();
  })

  return( 
    <div className='bg-[#0A0B10] h-screen p-16'>
      <Login />
      {/* <EmployeeDashboard /> */}
    </div>
  )
}

export default App
