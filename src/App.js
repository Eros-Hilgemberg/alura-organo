import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";


function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundária: '',
    },
    {
      nome: 'Front-End',
      corPrimaria: '',
      corSecundária: '',
    },

    {
      nome: 'Data Sciense',
      corPrimaria: '',
      corSecundária: '',
    },

    {
      nome: 'Devops',
      corPrimaria: '',
      corSecundária: '',
    },

    {
      nome: 'UX e Design',
      corPrimaria: '',
      corSecundária: '',
    },

    {
      nome: 'Mobile',
      corPrimaria: '',
      corSecundária: '',
    },
  ]


  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Time nome="Programação" />
      <Time nome="Front-End" />
      <Time nome="Data Science" />
    </div>
  );
}

export default App;
