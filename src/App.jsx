import { useState } from 'react'
import './App.css'


function Pelicula({ titulo }) {
    return (
        <div>
            <p>{titulo}</p>
        </div>
    );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Mis Películas Favoritas</h1>
      <Pelicula titulo="The Sheep Detectives" />
      <Pelicula titulo="Obsesión" />
      <Pelicula titulo="Hoppers" />
      <Pelicula titulo="The Housemaid" />
    </div>
  )
}



export default App
