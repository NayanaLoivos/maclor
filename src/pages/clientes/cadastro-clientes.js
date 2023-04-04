import Menu from "../../../components/Menu/Menu"
import ClientesHeader from "../../../components/Header/ClientesHeader"
import style from "../../styles/CadastroCliente.module.css"

export default function CadastroCliente () {
    
    return(
        <>
            <main className="content-ctr">
                <section className="menu-bar">
                    <Menu />
                </section>

                <section className="content">
                    <ClientesHeader />

                    <section className={style.cadastro}>
                        <h1>Cadastrar Cliente</h1>

                        <form className="formCtr">

                            <div className={style.tipo}>
                                <p>Tipo de Cliente</p>

                                <div className={style.radio}>
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

                            <div className={style.dados}>
                                
                                <div className={style.inputCtr}>
                                    <p>Nome</p>
                                    <input type="text" className={style.nome} id="nome" placeholder="Digite o nome do Cliente"/>
                                </div>
                                
                                <div className={style.inputCtr}>
                                    <p>CPF</p>
                                    <input type="text" id="cpf" placeholder="Digite o CPF"/>
                                </div>

                                <div className={style.inputCtr}>
                                    <p>RG</p>
                                    <input type="text" id="rg" placeholder="Digite o RG"/>
                                </div>
                                
                                <div className={style.inputCtr}>
                                    <p>Orgão Emissor</p>
                                    <input type="text" className={style.orgao} id="orgao" placeholder="XXXXXX"/>
                                </div>

                                <div className={style.inputCtr}>
                                    <p>E-mail</p>
                                    <input type="email" className={style.email} id="email" placeholder="Digite o E-mail do Cliente"/>
                                </div>

                                <div className={style.inputCtr}>
                                    <p>Contato</p>
                                    <input type="text" className={style.contato} id="contato" placeholder="Digite o Contato do Cliente"/>
                                </div>

                                <div className={style.inputCtr}>
                                    <p>Estado Civil</p>
                                    <select type="text" className={style.estadoCivil} id="estadoCivil" placeholder="Selecione a Opção"> 
                                        <option value="casado">Casado(a)</option>
                                        <option value="solteiro">Solteiro(a)</option>
                                    </select>
                                </div>

                                <div className={style.division}>
                                    <h2>DADOS DO CÔNJUGE</h2>
                                    <img src="/images/header-line.svg"/>

                                </div>

                                <div className={style.inputCtr}>
                                    <p>Nome</p>
                                    <input type="text" className={style.nome} id="nomeConj" placeholder="Digite o nome do Cliente"/>
                                </div>
                                
                                <div className={style.inputCtr}>
                                    <p>CPF</p>
                                    <input type="text" id="cpfConj" placeholder="Digite o CPF"/>
                                </div>

                                <div className={style.inputCtr}>
                                    <p>RG</p>
                                    <input type="text" id="rgConj" placeholder="Digite o RG"/>
                                </div>
                                
                                <div className={style.inputCtr}>
                                    <p>Orgão Emissor</p>
                                    <input type="text" className={style.orgao} id="orgaoConj" placeholder="XXXXXX"/>
                                </div>

                                <div className={style.division}>
                                    <h2>DOCUMENTOS</h2>
                                    <img src="/images/header-line.svg"/>

                                </div>

                                <div className={style.inputCtr}>
                                    <p>Comprovante de Residência</p>
                                    <input type="text" className={style.documents} id="residenciaDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className={style.inputCtr}>
                                    <p>CPF</p>
                                    <input type="text" className={style.documents} id="cpfDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className={style.inputCtr}>
                                    <p>RG</p>
                                    <input type="text" className={style.documents} id="rgDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className={style.inputCtr}>
                                    <p>Comprovante de Renda</p>
                                    <input type="text" className={style.documents} id="rendaDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className={style.inputCtr}>
                                    <p>Declaração IR</p>
                                    <input type="text" className={style.documents} id="irDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className={style.inputCtr}>
                                    <p>CPF Conjugê</p>
                                    <input type="text" className={style.documents} id="cpfConjDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className={style.inputCtr}>
                                    <p>RG Conjugê</p>
                                    <input type="text" className={style.documents} id="rgConjDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className={style.inputCtr}>
                                    <p>Certidão</p>
                                    <input type="text" className={style.documents} id="certidaoDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className={style.division}>
                                    <h2>CRIAR ACESSO</h2>
                                    <img src="/images/header-line.svg"/>

                                </div>

                                <div className={style.inputCtr}>
                                    <p>Digite a Senha</p>
                                    <input type="password" className={style.password} id="password" placeholder="Digite a Senha"/>
                                    <img src="/images/password.svg"/>
                                </div>

                                <div className={style.inputCtr}>
                                    <p>Confirme a Senha</p>
                                    <input type="password" className={style.password} id="password" placeholder="Confirme a Senha"/>
                                    <img src="/images/password.svg"/>
                                </div>

                                <img className={style.warning} src="/images/password-warning.svg"/>

                                <button className={style.cancel}>Cancelar</button>
                                <button className={style.save}>Salvar</button>

                            </div>
                            
                            

                        </form>
                    </section>
                </section>
            </main>
        </>
    )
}