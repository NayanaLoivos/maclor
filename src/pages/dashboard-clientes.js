import Menu from "../../components/Menu/Menu"
import styles from "../styles/Dash-Clientes-Imoveis.module.css"
import ClientesHeader from "../../components/Header/ClientesHeader"
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

                        <div className={styles.formCtr}>

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
                            
                        </div>
                    </div>

                </section>
            

            </main>
            
        </>
    )
}