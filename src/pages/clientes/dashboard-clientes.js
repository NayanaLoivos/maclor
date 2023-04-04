import Menu from "../../../components/Menu/Menu"
import styles from "../../styles/Dash-Clientes-Imoveis.module.css"
import ClientesHeader from "../../../components/Header/ClientesHeader"
import Link from "next/link"



export default function DashboardClientes () {


    return(
        <>
            <main className="content-ctr">
                <section className="menu-bar">
                    <Menu />
                </section>

                <section className="content" id={styles.clientes}>
                    <ClientesHeader />
                    
                    <div className={styles.content}>
                        <h1>Clientes</h1>

                        <div className="formCtr">

                            <div className={styles.interaction}>
                                <div className={styles.buttons}>
                                    <Link href="/adicionar-cliente">+ Adicionar</Link>
                                    <Link href="/vincular-imovel">+ Vincular Imóveis</Link>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder="Pesquisar" 
                                    className={styles.searchBar}
                                />
                            </div>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>E-mail</th>
                                        <th>CPF</th>
                                        <th>Qtd. Imóveis</th>
                                        <th colSpan={2}>Edição</th>
                                    </tr>
                                    <tr>
                                        <td>João da Silva</td>
                                        <td>jaoaodasilva@gmail.com</td>
                                        <td>001.002.003-04</td>
                                        <td>2</td>
                                        <td>
                                            <img src="/images/trash-bin.svg"/>
                                        </td>
                                        <td>
                                            <Link href="cadastro-clientes">
                                                <img src="/images/edit.svg"/>
                                                
                                            </Link>
                                        </td>
                                    </tr>
                                    
                                </thead>
                            </table>
                            
                        </div>
                    </div>

                </section>
            

            </main>
            
        </>
    )
}