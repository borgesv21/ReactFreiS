import { Link } from "react-router-dom"
import './index.scss'
import { useState } from "react"

export default function E04() {
    const [totalpgs, setTotalpgs]= useState(0)
    const [tempPgs, setTempPgs]= useState(0)
    const [totaltemp, setTotaltemp]= useState(0)
    

    function temp() {
        let calc= totalpgs*tempPgs/3600

        setTotaltemp(calc)
    }



    return(

        <div className='pagina-e01'>

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
                    <h2>Exercício 04 - Leitura de livro</h2>
                </div>
                <div className='faixa'/>
            </div>
            <div className='descricao'>
                <p> Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página</p>
            </div>
            <div className='formulario'>
                <div className='campos'>

                    <div className='campo'>
                        <label>Nome do livro</label>
                        <input />
                    </div>

                    <div className='campo'>
                        <label>Total em paginas </label>
                        <input placeholder='0' onChange={e=> setTotalpgs(e.target.value)} />
                    </div>

                    <div className='campo'>
                        <label>Tempo em segundos de leitura</label>
                        <input placeholder='0' onChange={e=> setTempPgs(e.target.value)} />
                    </div>

                    <button href='#' className='executar' onClick={temp}>Executar</button>
                </div>
                <h3 className='resultado'>Resultado: O total de horas é {totaltemp.toFixed(2)}</h3>
            </div>

        </div>
    </div>

    )
}