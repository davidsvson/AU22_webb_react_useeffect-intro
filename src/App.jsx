import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestButton from './components/Testbutton'
import Clock from './components/Clock'


function App() {
  const [showClock, setShowClock] = useState(true);

  let buttonTitle = 'show';
  let maybeClock = null;
  if (showClock) {
    maybeClock = <Clock />
    buttonTitle = 'hide';
  }

  
  return (
    <div className="App">
      <TestButton />

      <button onClick={() => setShowClock(!showClock)}>{buttonTitle}</button>
      {maybeClock}
    </div>
  )
}

export default App
