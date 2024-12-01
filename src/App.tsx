import './App.css'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Login from './components/Auth/Login'

function App() {

  return( 
    <div className='bg-gradient-to-r from-teal-400 to-gray-800 h-screen p-16'>
      <Login />
      <EmployeeDashboard />
    </div>
  )
}

export default App
