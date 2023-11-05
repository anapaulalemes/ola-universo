import TextosAutoraisModelo from "componentes/TextosAutoraisModelo";
import "./TextosAutorais.css";
import styles from "./TextosAutorais.module.css";
import { Route, Routes, useParams } from "react-router-dom";
import textosautorais from "json/textosautorais.json";
import ReactMarkdown from "react-markdown";
import TextosAutoraisCard from "componentes/TextosAutoraisCard";
import PaginaPadrao from "componentes/PaginaPadrao";
import NaoEncontrada from "paginas/NaoEncontrada";
// import fotoCapa from "assets/sobremimcapa.png"
//import fotoSobreMim from "assets"

export default function TextosAutorais() {
  const parametros = useParams();

  const textos = textosautorais.find((texto) => {
    return texto.id === Number(parametros.id);
  });

  if (!textos) {
    return <NaoEncontrada />;
  }

  const textosRecomendados = textosautorais
    .filter((texto) => texto.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <TextosAutoraisModelo
              fotoCapa={`/textosautorais/${textos.id}/capa.png`}
              titulo={textos.titulo}
            >
              <div className="textos-markdown-container">
                <ReactMarkdown>{textos.texto}</ReactMarkdown>
              </div>

              <h2 className={styles.tituloOutrosTextos}>
                Outros textos que você pode gostar:
              </h2>

              <ul className={styles.textosRecomendados}>
                {textosRecomendados.map((texto) => (
                  <li key={texto.id}>
                    <TextosAutoraisCard texto={texto} />
                  </li>
                ))}
              </ul>
            </TextosAutoraisModelo>
          }
        />
      </Route>
    </Routes>
  );
}
