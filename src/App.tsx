
import './App.css'
import Button from './assets/components/Button'
import TextInput from './assets/components/TextInput'
import List from './assets/components/List'
import Profile from './assets/components/Profile'



function App() {


  return (
    <>
      <div>
      </div>

      <h1>Prueba de React</h1>

    
      <div>
        <TextInput placeholder="Ingrese una busqueda" id='q'></TextInput>
        <Button text="Presioname" onClick={() => alert("Me presionaste")}></Button>
        <List></List>
      </div>


      <div className="card">
        <Profile href='https://github.com/Leonides2' src='https://avatars.githubusercontent.com/u/114005429?v=4' alt='Leonides2 avatar' ></Profile>
      </div>
    </>
  )
}

//Button need to implement the spotify update

export default App
