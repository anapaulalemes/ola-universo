import { Link } from "react-router-dom";
import styles from "./TextosAutoraisCard.module.css";
import BotaoPrincipal from "componentes/BotaoPrincipal";

export default function TextosAutoraisCard({ texto }) {
  return (
    <Link to={`/textosautorais/${texto.id}`}>
      <div className={styles.textosautorais}>
        <img
          className={styles.capa}
          src={require(`/public/posts/${texto.id}/capa.png`)}
          alt="Imagem de capa do post"
        />

        <h2 className={styles.titulo}>{texto.titulo}</h2>
        <BotaoPrincipal>Ler mais</BotaoPrincipal>
      </div>
    </Link>
  );
}
