import ClientesHeader from "../../../components/Header/ClientesHeader";
import Menu from "../../../components/Menu/Menu";
import style from "../../styles/VincularImoveis.module.css"
import Link from "next/link";


export default function VincularImoveis () {

    return(
        <>
            <main className="content-ctr">
                <section className="menu-bar">
                    <Menu />
                </section>

                <section className="content">
                    <ClientesHeader />

                    <h1>Vincular Imóveis</h1>

                    <section className={`formCtr ${style.vincular}`}>

                        <div>
                            <p>Tipo de Cliente</p>
                            <div className="radio">
                                <input 
                                    id="pf"
                                    name="tipo"
                                    type="radio"
                                    value="pf"
                                />
                                <label for="pf"> Pessoa Física</label>
                                <input 
                                    id="pj"
                                    name="tipo"
                                    type="radio"
                                    value="pj"
                                />
                                <label for="pj"> Pessoa Jurídica</label>
                            </div>
                        </div>
                        
                        <div className='inputCtr' id={style.search}>
                            <div>
                                <label for="cliente">Cliente</label>
                                <input 
                                    type="text" 
                                    placeholder="Pesquisar Cliente" 
                                    className='searchBar'
                                    id="cliente"
                                />
                            </div>
                            

                            <div>
                                <label for="imovel">Imóvel</label>
                                <input 
                                    type="text" 
                                    placeholder="Pesquisar Imóvel" 
                                    className='searchBar'
                                    id="imovel"
                                />
                            </div>
                            
                        </div>

                        <div className="buttons">
                            <button>+ Adicionar</button>
                        </div>

                        <div className={style.tableSearch}>
                            <input 
                                type="text" 
                                placeholder="Pesquisar" 
                                className='searchBar'
                                id="teste"
                            />
                        </div>
                        

                        

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Imóvel Vinculado</th>
                                    <th>Inscrição do Imóvel</th>
                                    <th>Gerar Contrato</th>
                                    <th colSpan={2}>Edição</th>
                                </tr>
                                <tr>
                                    <td>João da Silva</td>
                                    <td>Rua Aurora, 25</td>
                                    <td>XXXXXXXXXXXXX</td>
                                    <td id={style.generateContract}>
                                        <img src="/images/generate-contract.svg"/>
                                    </td>
                                    <td>
                                        <img src="/images/trash-bin.svg"/>
                                    </td>
                                    <td>
                                        <Link href="/clientes/cadastro-clientes">
                                            <img src="/images/edit.svg"/>
                                            
                                        </Link>
                                    </td>
                                </tr>
                                
                            </thead>
                        </table>
                        
                    </section>
                    
                </section>
            </main>
        </>
    )
}