import Menu from "../../components/Menu/Menu"
import styles from '../styles/Dashboard.module.css'

export default function Dashboard () {

  return(
    <>
      <main className="content-ctr">
        <section className="menu-bar">
          <Menu />
        </section>
        
        <section className="content" id={styles.dashboard}> 
          <img src="/images/under-construction.png" className={styles.construction} alt="under construction"/>
        </section>
        
      </main>
      
    </>

  )
}