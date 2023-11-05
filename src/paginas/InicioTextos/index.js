import TextosAutoraisCard from "componentes/TextosAutoraisCard";
import styles from "./InicioTextos.module.css";

import textosautorais from "json/textosautorais.json";

export default function InicioTextos() {
  console.log(textosautorais);
  return (
    <main>
      <ul className={styles.textosautorais}>
        {textosautorais.map((texto) => (
          <li key={texto.id}>
            <TextosAutoraisCard texto={texto} />
          </li>
        ))}
      </ul>
    </main>
  );
}
