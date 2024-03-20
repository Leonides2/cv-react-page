
import './App.css'
import Button from './assets/components/Button'
import TextInput from './assets/components/TextInput'
import List from './assets/components/List'
import Profile from './assets/components/Profile'
import { SpotifyProvider } from './Provider/SpotifyProvider'



function App() {

  var spotifyData = {};



  return (
    <>
      <h1>Prueba de React</h1>

    
      <SpotifyProvider>
        <TextInput placeholder="Ingrese una busqueda" id='q'></TextInput>
        <Button text="Presioname" onClick={()=> alert('Me presionaste')}></Button>
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
