import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label htmlFor="">{props.label}</label>
            <select required={props.obrigatorio} onChange={evento => props.aoAlterado(evento.target.value)} value={props.value}>
                {props.itens.map(item => <option key={item} value={props.item}>{item}</option>)}
            </select>
        </div>
    )
}
export default ListaSuspensa