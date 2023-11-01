import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobremimcapa.png"
//import fotoSobreMim from "assets"

export default function SobreMim() {
    return (
        <PostModelo
        fotoCapa={fotoCapa}
        titulo="Sobre Mim"
        >
        
        <h3 className={styles.subtitulo}>
            Olá, eu sou a Ana!
        </h3>

        {/* //<img
        src={fotoSobreMim}
        alt="Foto da Ana Paula"
        className={styles.fotoSobreMim}
        /> */}
        
        <p className={styles.paragrafo}>
            Hello
        </p>

        </PostModelo>
    )
}