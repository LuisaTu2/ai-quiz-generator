import './App.css'
import HomePage from './components/HomePage'
import { LearningProvider } from './components/LearningContext'

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
