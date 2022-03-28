import Formulario from "./Formulario"
import useLetras from "../hooks/useLetras"

const AppLetras = () => {

  const { lyric } = useLetras()

  return (
    <>
      <header>Búsqueda de Letras de Canciones</header>
      <Formulario />
      {lyric.length > 0 ?(
        <main>
          <div className="letra">
            {lyric}
          </div>
        </main>
      ) : null}
      
    </>
  )
}

export default AppLetras