import styles from '../Banner/Banner.module.css'
import Maskgroup from 'assets/Maskgroup.svg'



export default function Banner() {
   return (
    (
        <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Olá, universo!</h1>
       
            <p className={styles.paragrafo}>
            Boas vindas ao meu espaço pessoal!! Eu sou a Ana Paula, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
            </p>
    
        </div>
    
        <div className={styles.imagens}>
            <img 
            className={styles.Maskgroup}
            src={Maskgroup}
            aria-hidden={true}
            />

            {/* <img className={styles.minhaFoto} 
            src={minhaFoto}
            alt="Foto Ana Paula"
            /> */}
        </div>
        </div>
       )
   )
}