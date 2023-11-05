import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegistrada} from 'assets/Marcaregistrada.svg';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            Desenvolvido por Ana Paula Lemes
        </footer>
    )
}