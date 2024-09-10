import { Link } from "react-router-dom"
import './index.scss'
import { useState } from "react"

export default function E02() {
    const [valorKg, setValorKg] = useState(0)
    const [valorGrama, setValorGrama] = useState(0)

    function conversao() {
        let calc= valorKg*1000
        setValorGrama(calc)
    }

    return(

        <div className='pagina-e11'>
            
            <div className='cabecalho'>
                <div className='titulo'>
                    <img src='/logo.png' alt='logo'/>
                    <h1>
                        React FreiS
                    </h1>
                </div>
                <div className='links'>
                    <Link to='/' className='link'>Inicio</Link>
                    <Link to='/sobre' className='link'>Sobre</Link>
                </div>
            </div>


            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 2 - Converter Kg/gramas</h2>
                    </div>
                    <div className='faixa roxa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em Javascript para converter kilos em gramas.</p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Valor em kilos</label>
                            <input placeholder='0' onChange={e => setValorKg(e.target.value)}/>
                        </div>
                        
                        <button className='executar' onClick={conversao} >Executar</button>
                    </div>
                    
                    <div className='resultados'>
                       Resultado: O total é {valorGrama} gramas
                    </div>
                </div>
            </div>
        </div>

    )
}
