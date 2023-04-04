import Menu from "../../components/Menu/Menu"
import styles from '../styles/Dashboard.module.css'

export default function Dashboard () {

  return(
    <>
      <main className="content-ctr">
        <section className="menu-bar">
          <Menu />
        </section>
        
        <section className="content">
          <h1>Dashboard</h1>
        </section>
        
      </main>
      
    </>

  )
}