import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     
     <Card title="Note Worthy Tech" paraContent='nuralink implants is going to big thing in coming future' btnContent='Read More'/>
     <Card title='Note Worthy Video Game' paraContent='GTA VI is going to change gaming industry' btnContent='Visit to see more'/>

    </>
  )
}

export default App
