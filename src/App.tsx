import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import getSearchResults from './logic/spotifyUpdate'
import './App.css'
import Button from './assets/components/Button'
import TextInput from './assets/components/TextInput'
import List from './assets/components/List'
import Profile from './assets/components/Profile'



function App() {
  const [count, setCount] = useState(0)

 
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Prueba de React</h1>

      <div className="card">
        <Profile href='https://github.com/Leonides2' src='https://avatars.githubusercontent.com/u/114005429?v=4' alt='Leonides2 avatar' ></Profile>
      </div>
      <div>
        <TextInput placeholder="Ingrese una busqueda" id='q'></TextInput>
        <Button text="Presioname" onClick={() => getSearchResults('Rels B')}></Button>
        <List object={{name: "hola"}} params={[]}></List>
      </div>
    </>
  )
}

export default App
