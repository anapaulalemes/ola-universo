import styles from "./TextosAutoraisModelo.module.css";

export default function TextosAutoraisModelo({ fotoCapa, titulo, children }) {
  return (
    <article className={styles.textosModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      ></div>

      <h2 className={styles.titulo}>{titulo}</h2>

      <div className={styles.textosConteudoContainer}>{children}</div>
    </article>
  );
}
