import style from './Menu.module.css'
import Image from 'next/image'
import Link  from 'next/link';
import { useEffect } from 'react';

export default function Menu () {

    

    const openCorrectMenu = () =>{
        const path = window.location.pathname
        const pathArray = path.split('/')
        const param = pathArray[1];
        const clientes = document.getElementById('clientes');
        const imoveis = document.getElementById('imoveis');
        const menuArray = [clientes, imoveis]
        

        for(let element of menuArray){
            if(element.getAttribute('id') === param) {
                element.nextElementSibling.style.display = "flex"
            }
        }
    }
    
    useEffect(() => {
        openCorrectMenu()
    })

    const handleClick = (e) =>{
        const content = e.target.nextElementSibling;

        content.style.display === 'flex' ? content.style.display ='none' : content.style.display ='flex';
        
        openCorrectMenu()
    }

    return(
        <>
            <Link href="/dashboard">
                <Image 
                    src="/images/logo.jpg"
                    width={500}
                    height={500}
                    className={style.logo}
                    alt="company logo"
                /> 
            </Link>
            

            <nav className={style.menu}>

                <h4 className='categories'>Central de Cobrança</h4>

                <h4 className='categories' onClick={handleClick}>Clientes</h4>
                <div className={style.options} id="clientes">
                    <Link href="/clientes/dashboard-clientes"> Dashboard Clientes</Link>
                    <Link href="/clientes/cadastro-clientes">Cadastrar Clientes</Link> 
                    <Link href="/clientes/vincular-imoveis">Vincular Imóveis</Link>
                </div>

                <h4 className='categories' onClick={handleClick} id="imoveis">Imóveis</h4>
                <div className={style.options}>
                    <Link href="">Cadastrar imóveis</Link>
                    <Link href="">Vincular Clientes</Link>
                </div>

                <h4 className='categories' onClick={handleClick}>Controle Financeiro</h4>
                <div className={style.options} id={style.financeiro}>
                    <Link href="">Resumos das Atividades Mensais</Link>
                    <Link href="">Relatórios de Pendências</Link>
                    <Link href="">Detalhamento Por Cliente</Link>
                    <Link href="">Histórico dos Imóveis</Link>
                    <Link href="">Relatório de Custos Adicionais</Link>
                </div>

                <h4 className='categories' onClick={handleClick}>Contratos</h4>
                <div className={style.options}>
                    <Link href="">Gerar Contratos</Link>
                    <Link href="">Situação do Contrato</Link>
                    <Link href="">Cadastrar Ocorrências</Link>
                    <Link href="">Gerar Ocorrências</Link>
                </div>
            </nav>
        </>
    )
}