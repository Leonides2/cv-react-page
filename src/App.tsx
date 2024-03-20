
import './App.css'
import Button from './assets/components/Button'
import TextInput from './assets/components/TextInput'
import List from './assets/components/List'
import Profile from './assets/components/Profile'
import { SpotifyProvider } from './Provider/SpotifyProvider'
import SpotifyResponse from './logic/Props/SporifyResponse'
import getSearchResults from './logic/spotifyUpdate'



function App() {

  let spotifyData: SpotifyResponse;
  function buttonAction(){
  }



  return (
    <>
      <h1>Prueba de React</h1>

    
      <SpotifyProvider>
        <TextInput placeholder="Ingrese una busqueda"></TextInput>
        <Button text="Presioname" onClick={buttonAction}></Button>
        <h1></h1>
        <List object={spotifyData}></List>
      </SpotifyProvider>


      <div className="card">
        <Profile href='https://github.com/Leonides2' src='https://avatars.githubusercontent.com/u/114005429?v=4' alt='Leonides2 avatar' ></Profile>
      </div>
    </>
  )
}

//Button need to implement the spotify update

export default App
