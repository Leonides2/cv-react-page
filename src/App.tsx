
import './App.css'

import Profile from './assets/components/Profile'
import { SpotifyProvider } from './Provider/SpotifyProvider'
import SpotifyComponent from './assets/components/SpotifyComponent'



function App() {

  return (
    <>
      <h1>Prueba de React</h1>

    
      <SpotifyProvider>
        <SpotifyComponent placeholder="Ingrese una busqueda" buttonText='Buscar'></SpotifyComponent>
      </SpotifyProvider>


      <div className="card">
        <Profile href='https://github.com/Leonides2' src='https://avatars.githubusercontent.com/u/114005429?v=4' alt='Leonides2 avatar' ></Profile>
      </div>
    </>
  )
}

//Button need to implement the spotify update

export default App
