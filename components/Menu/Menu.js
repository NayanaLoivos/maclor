import styles from './Menu.module.css'
import Image from 'next/image'

export default function Menu () {

    const handleClick = (e) =>{
        const content = e.target.nextElementSibling;

        content.style.display === 'block' ? content.style.display ='none' : content.style.display ='block'
    }

    return(
        <>
            <Image 
                src="/images/logo.jpg"
                width={500}
                height={500}
                className={styles.logo}
            />

            <nav className={styles.menu}>

                <h4 className='categories'>Central de Cobrança</h4>

                <h4 className='categories' onClick={handleClick}>Clientes</h4>
                <div className={styles.options}>
                    <h5>Cadastrar Clientes</h5>
                    <h5>Vincular Imóveis</h5>
                    <h5>Listar Documentação</h5>
                </div>

                <h4 className='categories' onClick={handleClick}>Imóveis</h4>
                <div className={styles.options}>
                    <h5>Cadastrar imóveis</h5>
                    <h5>Vincular Clientes</h5>
                </div>

                <h4 className='categories' onClick={handleClick}>Controle Financeiro</h4>
                <div className={styles.options} id={styles.financeiro}>
                    <h5>Resumos das Atividades Mensais</h5>
                    <h5>Relatórios de Pendências</h5>
                    <h5>Detalhamento Por Cliente</h5>
                    <h5>Histórico dos Imóveis</h5>
                    <h5>Relatório de Custos Adicionais</h5>
                </div>

                <h4 className='categories' onClick={handleClick}>Contratos</h4>
                <div className={styles.options}>
                    <h5>Gerar Contratos</h5>
                    <h5>Situação do Contrato</h5>
                    <h5>Cadastrar Ocorrências</h5>
                    <h5>Gerar Ocorrências</h5>
                </div>
            </nav>
        </>
    )
}