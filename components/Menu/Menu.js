import styles from './Menu.module.css'
import Image from 'next/image'
import Link  from 'next/link';

export default function Menu () {

    const handleClick = (e) =>{
        const content = e.target.nextElementSibling;

        content.style.display === 'flex' ? content.style.display ='none' : content.style.display ='flex';

        const categoryElements = document.getElementsByClassName('categories');

        for(let category of categoryElements){
            category.innerHTML !== e.target.innerHTML && category.nextElementSibling.style.display === 'none';
            console.log(e.target.innerHTML)
        }

    }

    return(
        <>
            <Link href="/dashboard">
                <Image 
                    src="/images/logo.jpg"
                    width={500}
                    height={500}
                    className={styles.logo}
                    alt="company logo"
                /> 
            </Link>
            

            <nav className={styles.menu}>

                <h4 className='categories'>Central de Cobrança</h4>

                <h4 className='categories' onClick={handleClick}>Clientes</h4>
                <div className={styles.options}>
                    <Link href="/dashboard-clientes"> Dashboard Clientes</Link>
                    <Link href="">Cadastrar Clientes</Link> 
                    <Link href="">Vincular Imóveis</Link>
                    <Link href="">Listar Documentação</Link>
                </div>

                <h4 className='categories' onClick={handleClick}>Imóveis</h4>
                <div className={styles.options}>
                    <Link href="">Cadastrar imóveis</Link>
                    <Link href="">Vincular Clientes</Link>
                </div>

                <h4 className='categories' onClick={handleClick}>Controle Financeiro</h4>
                <div className={styles.options} id={styles.financeiro}>
                    <Link href="">Resumos das Atividades Mensais</Link>
                    <Link href="">Relatórios de Pendências</Link>
                    <Link href="">Detalhamento Por Cliente</Link>
                    <Link href="">Histórico dos Imóveis</Link>
                    <Link href="">Relatório de Custos Adicionais</Link>
                </div>

                <h4 className='categories' onClick={handleClick}>Contratos</h4>
                <div className={styles.options}>
                    <Link href="">Gerar Contratos</Link>
                    <Link href="">Situação do Contrato</Link>
                    <Link href="">Cadastrar Ocorrências</Link>
                    <Link href="">Gerar Ocorrências</Link>
                </div>
            </nav>
        </>
    )
}