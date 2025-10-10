import './App.css'
import HomePage from './components/HomePage'
import { LearningProvider } from './components/utils/LearningContext'

function App() {

  return (
    <>
      <LearningProvider>
        <HomePage />
      </LearningProvider>
    </>
  )
}

export default App
