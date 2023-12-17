import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ExpirementOne from './pages/ExpirementOne'
import ExpirementTwo from './pages/ExpirementTwo'
import ExpirementFour from './pages/ExpirementFour'
import ExpirementThree from './pages/ExpirementThree'
import ExpirementFive from './pages/ExpirementFive'
import ExperimentSix from './pages/ExperimentSix'
import Home from './pages/Home'

function App() {


  return (
    <div>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/experiment-one' element={<ExpirementOne />} />
        <Route path='/experiment-two' element={<ExpirementTwo />} />
        <Route path='/experiment-three' element={<ExpirementThree />} />
        <Route path='/experiment-four' element={<ExpirementFour />} />
        <Route path='/experiment-five' element={<ExpirementFive />} />
        <Route path='/experiment-six' element={<ExperimentSix />} />

      </Routes>

    </div>
  )
}

export default App
