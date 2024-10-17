import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Sciense',
        'Devops',
        'UX e Design',
        'Mobile'
    ]
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} label="Email" placeholder="Digite seu Email" valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa obrigatorio={true} label="Times" itens={times} valor={time} aoAlterado={valor => setTime(valor)} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}
export default Formulario