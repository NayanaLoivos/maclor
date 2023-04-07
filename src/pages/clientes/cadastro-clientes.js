import Menu from "../../../components/Menu/Menu"
import ClientesHeader from "../../../components/Header/ClientesHeader"
import style from "../../styles/CadastroCliente.module.css"
import { useEffect, useState } from "react"

export default function CadastroCliente () {

    const estados = ['SP','AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SE', 'TO']
    
    const [cadastro, setCadastro] = useState();

    const updateState = () => {
        event.preventDefault()
        
        setCadastro({
            tipo: tipoCliente,
            nome: document.getElementById('nome').value.toLowerCase(),
            docId: tipoCliente,
            rg: document.getElementById('rg').value.toLowerCase(),
            orgao: document.getElementById('orgao').value.toLowerCase(),
            email: document.getElementById('email').value.toLowerCase(),
            telefone: document.getElementById('telefone').value,
            estadoCivil: document.getElementById('estadoCivil').value,
            endereco: {
                rua: document.getElementById('rua').value.toLowerCase(),
                numero: document.getElementById('endNumero').value,
                cep: document.getElementById('cep').value,
                cidade: document.getElementById('cidade').value.toLowerCase(),
                estado: document.getElementById('uf').value.toLowerCase()
            },
            isFiador: isFiador,
            contato:{
                nome: document.getElementById('nomeConj').value.toLowerCase(),
                cpf: document.getElementById('cpfConj').value,
                rg: document.getElementById('rgConj').value.toLowerCase(),
                orgao: document.getElementById('orgaoConj').value.toLowerCase()
            },
            senha: document.getElementById('password').value
        }
        )

        alert('Cadastro Atualizado com Sucesso!')
    }

    const cancelarButton =() =>{
        location.reload()
    }

    const [tipoCliente, setTipoCliente] = useState()

    const handleChange = (event) =>{
        setTipoCliente(event.target.value)
        
    }
        

    const disableElements = () =>{
        const rg = document.getElementById('rg')
        const orgao = document.getElementById('orgao')
        const estadoCivil = document.getElementById('estadoCivil')
        const isFiador = document.getElementById('isFiador')
        if(tipoCliente === 'pj'){
            rg.setAttribute('disabled', 'disabled')
            rg.previousSibling.style.color = 'gray'
            orgao.setAttribute('disabled', 'disabled')
            orgao.previousSibling.style.color = 'gray'
            estadoCivil.setAttribute('disabled', 'disabled')
            estadoCivil.previousSibling.style.color = 'gray'
            isFiador.setAttribute('disabled', 'disabled')
            isFiador.nextElementSibling.style.color = 'gray'
        } else if (tipoCliente === 'pf'){
            rg.removeAttribute('disabled')
            rg.previousSibling.style.color = 'black'
            orgao.removeAttribute('disabled')
            orgao.previousSibling.style.color = 'black'
            estadoCivil.removeAttribute('disabled')
            estadoCivil.previousSibling.style.color = 'black'
            isFiador.removeAttribute('disabled')
            isFiador.nextElementSibling.style.color = 'black'
        } else{
            return;
        }
        
    }

    useEffect(() => {
        disableElements()
    },[tipoCliente])


    const [isFiador, setIsFiador] = useState()

    const handleToggle = (event) =>{
        event.target.checked ? setIsFiador(true) : setIsFiador(false)
    }

    useEffect(() => {
        const docFiadorArray = document.getElementsByClassName('docFiador');
        for(let element of docFiadorArray){
            isFiador ? element.style.display = 'block' : element.style.display = 'none'
        }
    },[isFiador])

    const togglePassword = () =>{
        const password = document.getElementById('password')
        password.getAttribute('type') === 'password' ? password.setAttribute('type', 'text') : password.setAttribute('type', 'password')
    }

    const toggleConfirmPassword = () =>{
        const password = document.getElementById('confirmPassword')
        password.getAttribute('type') === 'password' ? password.setAttribute('type', 'text') : password.setAttribute('type', 'password')
    }

    
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

                                <div className="radio">
                                    <input 
                                        id="pf"
                                        name="tipo"
                                        type="radio"
                                        value="pf"
                                        className="option"
                                        onChange={handleChange}
                                        
                                    />
                                    <label for="pf"> Pessoa Física</label>
                                    <input 
                                        id="pj"
                                        name="tipo"
                                        type="radio"
                                        value="pj"
                                        className="option"
                                        onChange={handleChange}
                                        
                                    />
                                    <label for="pj"> Pessoa Jurídica</label>

                                </div>

                            </div>

                            <div className={style.dados}>
                                
                                <div className='inputCtr'>
                                    <p>Nome</p>
                                    <input type="text" className={style.nome} id="nome" placeholder="Digite o nome do Cliente"/>
                                </div>

                                {
                                    tipoCliente !== 'pj' ?
                                    <div className='inputCtr'>
                                        <p>CPF</p>
                                        <input type="text" id="cpf" placeholder="Digite o CPF"/>
                                    </div>
                                    :
                                    <div className='inputCtr'>
                                        <p>CNPJ</p>
                                        <input type="text" id="cnpj" placeholder="Digite o CNPJ"/>
                                    </div>
                                }
                                

                                <div className='inputCtr'>
                                    <p>RG</p>
                                    <input type="text" id="rg" placeholder="Digite o RG"/>
                                </div>
                                
                                <div className='inputCtr'>
                                    <p>Orgão Emissor</p>
                                    <input type="text" className={style.orgao} id="orgao" placeholder="XXXXXX"/>
                                </div>

                                <div className='inputCtr'>
                                    <p>E-mail</p>
                                    <input type="email" className={style.email} id="email" placeholder="Digite o E-mail do Cliente"/>
                                </div>

                                <div className='inputCtr'>
                                    <p>Telefone</p>
                                    <input type="number" className={style.telefone} id="telefone" placeholder="Digite Telefone do Cliente"/>
                                </div>

                                <div className='inputCtr'>
                                    <p>Estado Civil</p>
                                    <select type="text" className={style.estadoCivil} id="estadoCivil" placeholder="Selecione a Opção"> 
                                        <option></option>
                                        <option value="casado">Casado(a)</option>
                                        <option value="solteiro">Solteiro(a)</option>
                                    </select>
                                </div>

                                <div className='inputCtr'>
                                    <p>Endereço</p>
                                    <input type="text" className={style.endereco} id="rua" placeholder="Digite o Endereço"/>
                                </div>

                                <div className='inputCtr'>
                                    <p>Número</p>
                                    <input type="number" className={style.endNumero} id="endNumero"/>
                                </div>

                                <div className='inputCtr'>
                                    <p>CEP</p>
                                    <input type="text" className={style.cep} id="cep" placeholder="Digite o CEP"/>
                                </div>

                                <div className='inputCtr'>
                                    <p>Cidade</p>
                                    <input type="text" className={style.cidade} id="cidade" placeholder="Digite a Cidade"/>
                                </div>

                                <div className='inputCtr'>
                                    <p>Estado</p>
                                    <select className={style.estado} id='uf'>
                                        {
                                        estados.map((estado) => {
                                            return <option value={estado}>{estado}</option>
                                        })}

                                    </select>
                                </div>

                                <div className={style.isFiador}>
                                    
                                    <input type="checkbox" id="isFiador" name="isFiador" onChange={handleToggle}/>
                                    <label for="isFiador">É Fiador</label>
                                </div>

                                <div className={style.division}>
                                    {tipoCliente === 'pf' ? <h2>DADOS DO CÔNJUGE</h2> : <h2>DADOS DO CONTATO</h2>}
                                    <img src="/images/header-line.svg"/>

                                </div>

                                <div className='inputCtr'>
                                    <p>Nome</p>
                                    <input type="text" className={style.nome} id="nomeConj" placeholder="Digite o nome do Contato"/>
                                </div>
                                
                                <div className='inputCtr'>
                                    <p>CPF</p>
                                    <input type="text" id="cpfConj" placeholder="Digite o CPF"/>
                                </div>

                                <div className='inputCtr'>
                                    <p>RG</p>
                                    <input type="text" id="rgConj" placeholder="Digite o RG"/>
                                </div>
                                
                                <div className='inputCtr'>
                                    <p>Orgão Emissor</p>
                                    <input type="text" className={style.orgao} id="orgaoConj" placeholder="XXXXXX"/>
                                </div>

                                <div className={style.division}>
                                    <h2>DOCUMENTOS</h2>
                                    <img src="/images/header-line.svg"/>

                                </div>

                                <div className='inputCtr'>
                                    <p>Comprovante de Residência</p>
                                    <input type="text" className={style.documents} id="residenciaDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className='inputCtr'>
                                    <p>CPF</p>
                                    <input type="text" className={style.documents} id="cpfDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className='inputCtr'>
                                    <p>RG</p>
                                    <input type="text" className={style.documents} id="rgDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className='inputCtr'>
                                    <p>Comprovante de Renda</p>
                                    <input type="text" className={style.documents} id="rendaDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className='inputCtr'>
                                    <p>Declaração IR</p>
                                    <input type="text" className={style.documents} id="irDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className='inputCtr'>
                                    <p>CPF Conjugê</p>
                                    <input type="text" className={style.documents} id="cpfConjDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className='inputCtr'>
                                    <p>RG Conjugê</p>
                                    <input type="text" className={style.documents} id="rgConjDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className='inputCtr'>
                                    <p>Certidão</p>
                                    <input type="text" className={style.documents} id="certidaoDoc" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className='inputCtr docFiador'>
                                    <p>Certidão Ônus Reais</p>
                                    <input type="text" className={style.documents} id="certidaoOnus" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className='inputCtr docFiador'>
                                    <p>Cópia do IPTU Garantia</p>
                                    <input type="text" className={style.documents} id="iptuGarantia" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className='inputCtr docFiador'>
                                    <p>Outros</p>
                                    <input type="text" className={style.documents} id="outros1" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                <div className='inputCtr docFiador'>
                                    <p>Outros</p>
                                    <input type="text" className={style.documents} id="outros2" placeholder="Selecione o Arquivo" disabled/>
                                </div>

                                
                                <div className={style.division} id={style.acesso}>
                                    <h2>CRIAR ACESSO</h2>
                                    <img src="/images/header-line.svg"/>
                                </div>

                                <div className='inputCtr'>
                                    <p>Digite a Senha</p>
                                    <input type="password" className={style.password} id="password" placeholder="Digite a Senha"/>
                                    <img className={style.eye} src="/images/password.svg" onClick={togglePassword}/>
                                </div>

                                <div className='inputCtr'>
                                    <p>Confirme a Senha</p>
                                    <input type="password" className={style.password} id="confirmPassword" placeholder="Confirme a Senha"/>
                                    <img className={style.eye} src="/images/password.svg" onClick={toggleConfirmPassword}/>
                                </div>

                                <img className={style.warning} src="/images/password-warning.svg"/>

                                <button className={style.cancel} onClick={cancelarButton}>Cancelar</button>
                                <button className={style.save} onClick={updateState}>Salvar</button>

                            </div>
                            
                            

                        </form>
                    </section>
                </section>
            </main>
        </>
    )
}