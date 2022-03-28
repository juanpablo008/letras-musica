import { useState } from "react"
import useLetras from "../hooks/useLetras"

const Formulario = () => {

  const { newAlert, searchAPI } = useLetras()

  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: ""
  })

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(busqueda).includes("")) {
      newAlert("Error", "Todos los campos son obligatorios","error")
      return
    }
    searchAPI(busqueda.artista, busqueda.cancion)
  }

  return (
    <form onSubmit={handleSubmit}>
      <legend>Busca por artistas y canción</legend>
      <div className="form-grid">
        <div> 
          <label htmlFor="">Artista</label>
          <input type="text" name="artista" placeholder="Nombre Artista" value={busqueda.artista} onChange={e => setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
          })} />
        </div>
        <div> 
          <label htmlFor="">Canción</label>
          <input type="text" name="cancion" placeholder="Nombre Canción" value={busqueda.cancion} onChange={e => setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
          })} />
        </div>
        <input type="submit" value="buscar" />
      </div>
    </form>
  )
}

export default Formulario