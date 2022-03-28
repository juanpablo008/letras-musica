import { useState, createContext } from "react"
import Swal from "sweetalert2"

const LetrasContext = createContext()

const LetrasProvider = ({ children }) => {

  const [lyric, setLyric] = useState("")

  const newAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon
    })
  }

  const searchAPI = async (artista, cancion) => {
    try {
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const res = await fetch(url)
      const data = await res.json()
      if(data.lyrics){
        setLyric(data.lyrics)
        newAlert("Success", "La letra de la canción ha sido obtenida con éxito", "success")
        return
      }
      setLyric("")
      newAlert("Error", "No se encontró la letra de la canción", "error")
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <LetrasContext.Provider
      value={{
        newAlert,
        searchAPI,
        lyric
      }}
    >
      {children}
    </LetrasContext.Provider>
  )
}

export {
  LetrasProvider
}
export default LetrasContext