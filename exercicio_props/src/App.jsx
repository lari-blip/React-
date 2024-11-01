import './App.css'
//import Perfil from './componentes/Perfil'
// import Nomes from './components/Nomes'

function App() {

  const name = "Larissa"

  return (
    <>
      {/* <Nomes name="Denni"/>
      <Nomes name="Ana Carolina"/>
      <Nomes name="Daiane"/>
      <Nomes name="Gabriela"/>
      <Nomes name="Junior"/> */}
      <Perfil name={name} idade="19 anos" pais="Brasil" />
      <Perfil name="Larissa" idade="19 anos" pais="Brasil" />

    </>
  )
}

export default App