import { Link } from "react-router-dom"
import './index.scss'
import { useState } from "react"




export default function E05() {

    const [nota1, setNota1]= useState(0)
    const [nota2, setNota2]= useState(0)
    const [nota3, setNota3]= useState(0)
    const [resul, setResul]= useState(0)

    function mediatresnota() {
        let media= nota1+nota2+nota3/3 

        setResul(media)
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
                        <label>Nota 1</label>
                        <input placeholder='0' onChange={e=> setNota1(e.target.value)} />
                    </div>

                    <div className='campo'>
                        <label>Nota 2 </label>
                        <input placeholder='0' onChange={e=> setNota2(e.target.value)} />
                    </div>

                    <div className='campo'>
                        <label>Nota 3 </label>
                        <input placeholder='0' onChange={e=> setNota3(e.target.value)} />
                    </div>

                    <button href='#' className='executar' onClick={mediatresnota}>Executar</button>
                </div>
                <h3 className='resultado'>A média do aluno é {resul}</h3>
            </div>

        </div>
    </div>

    )
}